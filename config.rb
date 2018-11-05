# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

# helpers do
#   def some_helper
#     'Helping'
#   end
# end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

# configure :build do
#   activate :minify_css
#   activate :minify_javascript
# end

# Middleman LiveReload
activate :livereload

# Middleman-Deploy
activate :deploy do |deploy|
  deploy.deploy_method = :git
  deploy.remote = 'https://github.com/raspberrytau42/raspberrytau42.github.io.git'
  deploy.branch = 'master'
  deploy.build_before = false
end

# Middleman-Blog extension
activate :blog do |blog|
  blog.name = "blog"
  blog.prefix = "blog"
  blog.layout = "bloglayout"
  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"
  # blog.permalink = "./{title}.html"
end

activate :blog do |blog|
  blog.name = "thoughts"
  blog.prefix = "thoughts"
  blog.layout = "thoughtslayout"
  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"
  # blog.permalink = "./{title}.html"
end

# Tells menu pages to use corresponding custom layout
page "/menu.html", :layout => "menulayout"
page "/menu/*", :layout => "menulayout"

# Google Analytics extension
activate :google_analytics do |ga|
  ga.tracking_id = 'UA-50288708-10' # Replace with your property ID.
end

# Activates director indexes
activate :directory_indexes
