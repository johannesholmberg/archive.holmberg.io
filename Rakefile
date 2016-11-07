require "rubygems"
require "tmpdir"
require "bundler/setup"
require "jekyll"
require "html-proofer"

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

desc "Generate and publish website to master"
task :publish => [:generate] do

  # Change your GitHub reponame
  GITHUB_REPONAME = "johannesholmberg/holmberg.io"

  # Make a temporary directory for the build before production release.
  Dir.mktmpdir do |tmp|
    # Copy accross our compiled _site directory.
    cp_r "_site/.", "_publish.holmberg.io/"

    # Switch in to the tmp dir.
    Dir.chdir "_publish.holmberg.io/"

    # Prepare all the content in the repo for deployment.
    system "git init" # Init the repo.

    system "git add ."
    message = "Site updated at #{Time.now.utc}"
    system "git commit -m #{message.inspect}" # Add and commit all the files.

    # Add the origin remote for the parent repo to the tmp folder.
    system "git remote add origin https://github.com/#{GITHUB_REPONAME}.git"

    # Push the files to the gh-pages branch, forcing an overwrite.
    system "git push origin master --force"

  end
end

# rake test
desc "build and test website"
task :test do
  sh "bundle exec jekyll build"
end
