require "html-proofer"

desc "Build and test website links"
task :test do
  sh "bundle exec jekyll build --config _config.yml,_config.prod.yml"
  HTMLProofer.check_directory('./_site', {
    :disable_external => true,
    :allow_hash_href => false,
    :verbose => true,
    :only_4xx => true,
    :file_ignore => [
      './_site/assets/vendor/loadcss/test/preload.html',
      './_site/assets/vendor/loadcss/test/qunit/index.html',
      './_site/assets/vendor/loadcss/test/110-reducedexample.html',
      './_site/assets/vendor/picturefill/index.html'
    ],
    :check_html => false
  }).run
end
