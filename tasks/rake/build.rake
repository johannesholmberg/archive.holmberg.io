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
  puts "Building for production"
  system "JEKYLL_ENV=production jekyll build --config _config.yml,_config.prod.yml"
  critical
end
