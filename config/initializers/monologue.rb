Monologue.config do |config|
  config.site_name = "blog | ellen wondra"
  config.site_subtitle = "blog for ellen wondra. my random, random thoughts."
  config.site_url = "http://www.ellenwondra.com"

  config.meta_description = "This is my blog about..."
  config.meta_keyword = "code, pets, crafts, social justice"

  config.admin_force_ssl = false
  config.posts_per_page = 10
  config.preview_size = 1000

  config.disqus_shortname = "ln1draw"

  # LOCALE
  config.twitter_locale = "en" # "fr"
  config.facebook_like_locale = "en_US" # "fr_CA"
  config.google_plusone_locale = "en"

  config.layout               = "layouts/application"

  # ANALYTICS
  # config.gauge_analytics_site_id = "YOUR COGE FROM GAUG.ES"
  # config.google_analytics_id = "YOUR GA CODE"

  config.sidebar = ["latest_posts", "categories", "tag_cloud"]


  #SOCIAL
  config.twitter_username = "ln1draw"
  config.linkedin_url = "http://www.linkedin.com/in/ln1draw"
  config.github_username = "ln1draw"
  config.show_rss_icon = true

end