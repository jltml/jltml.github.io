---

title: "A complete guide to making a Minecraft server on a Raspberry Pi"
date: 2021-03-17 23:05 CDT
tags: projects

---

My first tutorial! How exciting. I kind of doubt that anyone will read this. Nonetheless, it would've been helpful to have, so here I go:

## What you'll need
- a Raspberry Pi 4 (4GB+ of RAM, probably)
  - Power supply
  - MicroSD card
- an Ethernet connection (preferably)
- a case, if you’d like one
- I think that’s it…?

I used a Raspberry Pi 4 with 8GB of RAM to be safe — but when running `htop` I haven’t ever seen usage go above 2GB, even when I’m connected and playing on the server. I have yet to stress-test it, or even really *use* it, though, so it’s better to be safe and get more RAM. But I suspect that 4GB is just fine (2GB might be a little iffy, but if that’s all you have and don’t plan on hosting too many people, go for it).

Also, an Ethernet connection is almost definitely a good idea — that’s probably something you won’t want to skimp on. I don’t know, maybe if you have some super-fast connection and you’ve got awesome WiFi with no interference, that might be fine, but I’m definitely sticking with a wired connection given our paltry upload speeds (and for ping purposes, too).

As for the MicroSD card: I had no idea what I’d need, so I was kind of crazy and [got one that’s 128GB](https://www.target.com/p/sandisk-microsdxc-card-128gb-for-nintendo-switch/-/A-78140794). It’s been great, but I’ve also since realized that because of the way the Pi’s filesystem works, bootable backups will be massive (unless I’m missing something, which I probably am?). I’ve used, like, nothing, so you definitely don’t need one so massive. Even 16GB would probably be barely utilized. I’m not sure about the necessity of fast read-and-write speeds, so I defaulted to getting a relatively fast one — for example, [Micro Center’s MicroSD cards](https://www.microcenter.com/product/485234/micro-center-64gb-microsdxc-class-10--uhs-1-flash-memory-card) are ridiculously cheap but also (on paper, at least) very slow, so I avoided them. They could definitely work — I just have no idea.

## Getting started

Ok, so first you’ll have to flash the Pi’s software. And right off the bat we have a lesson I learned: use a 64-bit OS! I was [very confused](https://github.com/itzg/docker-minecraft-server/issues/508#issuecomment-797082423) as to why I couldn’t set my server to use more than 2GB of RAM without it failing, but turns out there’s a [whole Wikipedia page about it](https://en.wikipedia.org/wiki/2_GB_limit). I used the [beta 64-bit Raspberry Pi OS](https://www.raspberrypi.org/forums/viewtopic.php?t=275370), which you can [download by clicking here](https://downloads.raspberrypi.org/raspios_arm64/images/raspios_arm64-2020-08-24/2020-08-20-raspios-buster-arm64.zip) (download will start immediately). Also, you’ll need the Raspberry Pi Imager app: [download a copy here](https://www.raspberrypi.org/software/), or if you use Homebrew, install it with `brew install --cask raspberry-pi-imager`. Once the OS is downloaded, you *don’t have to unzip it* — just launch the RPi Imager and click “choose OS” and scroll down to select “custom OS.” Select the `.zip` file, select your MicroSD card (insert it if you haven’t already), and then write the image.

When all of that is done, the application will automatically eject the MicroSD card. Just remove it and plug it back in to remount it — we’ll need to edit something. Because the Pi 4 has MicroHDMI ports, and I couldn’t find the adapter to normal HDMI, I had to figure out a different way to enable SSH[^For those of you who don’t know, `ssh` is a way to remotely connect to another computer — it stands for “secure shell.”] (it’s turned off by default)… turns out it’s quite simple. All you have to do is create an empty file called `ssh` on the MicroSD card — to do this, launch Terminal (I’m on a Mac… sorry Windows people; I have like no idea how your stuff works…) and type `cd ` — that’s cd with a space after it. Then, just drag your MicroSD card’s icon from your Desktop onto the Terminal window — it’ll fill in the path. You should have something like this (the `$` is just to make it clear that it’s a shell/Terminal command — that’s not part of the command, so don’t type it in)

```shell
$ cd Volumes/path/to/your/drive
```

in which the `/path/to/your/drive` part will obviously be different. Then hit return, and you should be in the MicroSD card’s directory. Now, the command to create the empty file called `ssh`:

```shell
$ touch ssh
```

You should be all good to go now! Eject the MicroSD card, put it in the Pi, connect your Ethernet, and plug in the power supply! SSH should be automatically enabled.

Ok, but now we have to actually connect. That’s also pretty straightforward! I used [Fing](https://www.fing.com) to find my Pi’s IP address — using the desktop app is likely easiest, since the iPhone app can no longer identify devices by MAC address as well. Find the Raspberry Pi, click on it, and get its IP address. Then, SSH into it:

```shell
$ ssh pi@192.168.0.x
```

in which `x` will be replaced by your Pi’s specific number. Some routers use different numbering schemes, but I think most are `192.168` etc. The `pi` refers to the username, which is by default pi.

If you’ve got the IP address right, it will ask you for a password — the default is `raspberry`. Once you’re in, you’ll want to change that right away (it will tell you how onscreen). After you’ve done that, you can adjust other localisation settings by running

```shell
$ sudo raspi-config
```

## Docker things

Alright, so you’re all logged in and everything now! Congrats. Time for the actual server stuff: we’ll be using the absolutely awesome [docker-minecraft-server by itzg](https://github.com/itzg/docker-minecraft-server). Docker is a platform for creating containerized apps/environments/stuff, so you can do multiple things on one computer without worrying about one thing messing the other things up. Clearly I’m not super proficient with it. [But here, you can read more.](https://en.wikipedia.org/wiki/Docker_(software)) Anyway, we’ll need to install Docker to start. Run these two commands:

```shell
$ curl -fsSL https://get.docker.com -o get-docker.sh
$ sudo sh get-docker.sh
```

and Docker will install! Then add yourself to the user group so you don’t have to run everything with `sudo`, then restart the Pi to make that go into effect:

```shell
$ sudo usermod -aG docker pi
$ sudo reboot
```

You’ll have to wait a minute, then `ssh` again, like before (`ssh pi@[your IP]`. Next, we need to install `docker-compose`, which makes it much easier to restart your server and stuff — instead of having to type in all your configuration every time you start it, `docker-compose` will use a [YAML](https://github.com/itzg/docker-minecraft-server/blob/master/examples/docker-compose-autopause.yml) file, which is so much easier to read and just generally way better. More commands (I used [this guide](https://sanderh.dev/setup-Docker-and-Docker-Compose-on-Raspberry-Pi/)):

```shell
$ sudo apt-get install -y libffi-dev libssl-dev
$ sudo apt-get install -y python3 python3-pip
$ sudo apt-get remove python-configparser
$ sudo pip3 -v install docker-compose
```

## Server time

Ah, finally, time for the actual server. Ok, so to begin, let’s make a directory (folder) for our server, so we can keep everything in one place:

```shell
$ mkdir minecraft-server
$ cd minecraft-server
```

`mkdir` is “make directory,” and `cd` is “change directory.” Next, make  (and edit) a file called `docker-compose.yml` — that’s the one with all the configuration stuff:

```shell
$ nano docker-compose.yml
```

You’ll now be in `nano`, a command-line text editor. You can copy and paste the following into `nano`:

```yaml
minecraft-server:
  image: itzg/minecraft-server:multiarch-latest

  ports:
    - "25565:25565" # Probably don't change this

  environment:
    EULA: "TRUE" # Agrees to Mojang EULA (necessary to start server)
    INIT_MEMORY: "1G" # Initial memory
    MAX_MEMORY: "6G" # Set this to a little less than your RAM
    DEBUG_MEMORY: "TRUE" # Shows extra memory stats in logs
    OVERRIDE_SERVER_PROPERTIES: "TRUE"
    MAX_TICK_TIME: "-1" # Disables the watchdog server restarter
    ENABLE_AUTOPAUSE: "TRUE" # Pauses server process when no one's on
    SERVER_NAME: "Raspberry Pi Server" # Self-explanatory
    OPS: "player1,player2" # Administrators by username
    MAX_PLAYERS: "5" # Self-explanatory
    MOTD: "Message of the day (subtitle) goes here" # Set this
    WHITELIST: "player1,player2,etc" # Whitelist players here
    SPAWN_PROTECTION: "0" # radius in chunks around spawn to protect from non-OPs
    OVERRIDE_SERVER_PROPERTIES: "true"
    OVERRIDE_WHITELIST: "true"
    OVERRIDE_OPS: "true"
    # The above 3 set it to override old parameters upon restart

  volumes:
    - ./data:/data # This stores your world between restarts

  tty: true
  stdin_open: true
  restart: always
  container_name: mc # You can change this if you'd like
  privileged: true
```

Go ahead and change the parameters to suit your own preferences/needs. When you’re all done, do control-X to exit, then follow the onscreen instructions to save (type `y` then hit `enter` to save as `docker-compose.yml`). Now… time to start the server!

```shell
docker-compose up -d
```

The `-d` part is for `--detached`, which lets it run in the background. But to view the logs, which is probably a good idea, do

```shell
docker logs mc -f
```

`mc` is the name we gave the Docker container, and `-f` tells it to follow the logs as they keep coming. Once everything’s downloaded and up and running, you can open up Minecraft on your computer, add a new server, type in your Pi’s IP address, and you should be able to log in (as long as you’ve whitelisted yourself, if you left the whitelist enabled)! Super exciting.

## Connecting over the Internet

So far, you’re able to connect over your local network. But that’s probably not why you’re making this — you’d like to play with people over the whole Internet, otherwise there isn’t much of a point to doing this over just using your computer. There are a few steps to opening the server to the internet — first, sign up for an account at [DuckDNS](https://www.duckdns.org). They’re a free *dynamic IP* service — so basically, unless you’re a business and you pay your ISP for a static IP address, your outward-facing IP will change from time to time, which would break the server address your friends typed in. You’d have to constantly check your public IP and tell them to type it in. DuckDNS automates that — you put a script on your Pi that runs every 5 minutes or so and tells them your IP address, and then their website points a subdomain (that you choose) to your IP. Add a subdomain with a name you like, and then [follow their installation instructions back on your Pi](https://www.duckdns.org/install.jsp) (in the Terminal window). Make sure you select “pi” as the operating system, and you can use `nano` instead of `vi` — it’s a little less complicated and easier to understand. Come back here when you’re done.

Ok, you’re back? Good job. Now all we have to do is port forwarding. Log into your router’s GUI (probably 192.168.0.1), and find the section about port forwarding (for us it’s under “advanced setup”). Do what it asks for — routers are weird and all very different, but for us, that meant entering the IP address of the Pi, leaving the LAN starting port blank, selecting TCP (only) as the protocol, and setting 25565 to be the only WAN port (I also left “source IP state” as “all IP addresses”). Port 25565 is the default port for Minecraft servers. If you’d like to be able to `ssh` from somewhere else, you can also open port 22, which is (you guessed it) the default SSH one. (If you do, just make sure that your password is really strong, and *definitely* don’t leave the password as the default `raspberry`!!)

## Joining the world

So presumably you’ve made it — congrats(!)

To join the world on your local network, you’ll need to use the Pi’s local IP address as your server address. To play elsewhere, use the DuckDNS domain. (If you have a VPN on, you can connect using the DuckDNS domain even on your local network, but just do the local IP address because it provides lower (better) ping.) Basically, just add both, and one will be disconnected depending on whether you’re at home or elsewhere. You can just give other people the DuckDNS domain, though, unless they’re at your place. Also — if you’re finicky like me and would rather use a subdomain of a domain that you own, you can just add a CNAME record that points to `you.duckdns.org` (replacing `you`, of course). If you have no idea what that means, don’t worry at all.

## 🎉 You did it!

Congratulations! (If you ran into issues, feel free to leave a comment and I’ll do my best to help.)

This is where I would say ‘happy crafting’ or something, but that’s exceedingly cringy, so nope… just congratulations.