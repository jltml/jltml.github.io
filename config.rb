# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false
page '/README.md', layout: false

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

Time.zone = 'Central Time (US & Canada)'

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

configure :build do
  activate :autoprefixer do |prefix|
    prefix.browsers = 'last 2 versions'
  end
  activate :minify_css

  # activate :minify_javascript
  activate :minify_html
  # activate :imageoptim do |options|
  #   options.verbose = true
  # end
end

# Middleman LiveReload
activate :livereload

# Middleman-Deploy
activate :deploy do |deploy|
  deploy.deploy_method = :git
  deploy.remote = 'https://github.com/jltml/jltml.github.io.git'
  deploy.branch = 'master'
  deploy.build_before = false
end

# Middleman-Blog extension
activate :blog do |blog|
  blog.name = 'blog'
  blog.prefix = 'blog'
  blog.layout = 'articleslayout'
  blog.tag_template = 'tag.html'
  blog.calendar_template = 'calendar.html'
  blog.permalink = '{title}'
  blog.default_extension = '.md'
end

# Tells menu & other pages to use corresponding custom layout
page '/menu/*', layout: 'menulayout'
page '/misc/sidenav/*', layout: 'menulayout'

# Google Analytics extension — removed from this website because of incompatibility with latest Middleman & Ruby 3.0.0 (previous tag in _head.erb commented out and gem removed)
# activate :google_analytics do |ga|
#   ga.tracking_id = 'UA-50288708-10' # Replace with your property ID.
# end

# Activates directory indexes
activate :directory_indexes

# Tells pages not to use direcory indexes
page '/404.html', directory_index: false
page '/my-things.md', directory_index: false
page '/README.md', directory_index: false
