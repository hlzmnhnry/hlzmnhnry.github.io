# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "hlzmnhnry-github-pages"
  spec.version       = "1.0.5"
  spec.authors       = ["Henry Hölzemann"]

  spec.summary       = "Personal research portfolio for Henry Hölzemann."
  spec.description   = "A focused Jekyll portfolio for selected research and publications."
  spec.homepage      = "https://hlzmnhnry.github.io"
  spec.license       = "MIT"

  spec.metadata["plugin_type"] = "theme"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_runtime_dependency "jekyll", ">= 3.6", "< 5.0"

  spec.add_development_dependency "bundler", ">= 1.14", "< 3.0"
end
