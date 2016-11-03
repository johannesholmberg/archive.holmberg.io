module Jekyll
  class TestPlugin < Liquid::Tag
    def render(context)
      "It's Working!"
    end
  end
end

Liquid::Template.register_tag('testplugin', Jekyll::TestPlugin)

# Testing plugin output of '_plugins/testplugin.rb': {% testplugin %}
