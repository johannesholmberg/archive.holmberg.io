desc "Generate and publish website to master"
task :publish => [:generate] do

  # Change your GitHub reponame
  GITHUB_REPONAME = "johannesholmberg/holmberg.io"

  # Make a temporary directory for the build before production release.
  Dir.mktmpdir do |tmp|
    # Copy accross our compiled _site directory.
    cp_r "_site/.", "_deploy/"

    # Switch in to the tmp dir.
    Dir.chdir "_deploy/"

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
