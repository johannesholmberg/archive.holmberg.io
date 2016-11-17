def clean
  puts "Cleaning previous builds"
  system "rm -Rf _site/"
end

def critical
  puts "Creating Critical CSS"
  system "gulp critical"
end

desc "Generate blog files"
task :generate do
  clean
  critical
  puts "Building for production"
  system "JEKYLL_ENV=production jekyll build --config _config.yml,_config.prod.yml"
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
end
