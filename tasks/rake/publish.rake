desc "Generate and publish website to master"
task :publish => [:generate] do
  puts 'Publishing your website, silence is golden...'
  user = 's201511.gridserver.com'
  server = 's201511.gridserver.com'
  path = 'domains/holmberg.io/html'
  sh "rsync -rtzh --delete _site/ #{user}@#{server}:#{path}"
  puts 'Your website is now published!'
end
