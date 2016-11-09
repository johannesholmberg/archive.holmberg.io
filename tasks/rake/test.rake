require "html-proofer"

def clean
  puts "Cleaning previous builds"
  system "rm -Rf _site/"
end

def critical
  puts "Creating Critical CSS"
  system "gulp critical"
end

desc "Build and test website links"
task :test do
  clean
  puts "Building for test"
  sh "bundle exec jekyll build --config _config.yml,_config.test.yml"
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
    :typhoeus => {
      :ssl_verifypeer => false,
      :ssl_verifyhost => 0
    },
    :check_html => true
  }).run
  critical
end
