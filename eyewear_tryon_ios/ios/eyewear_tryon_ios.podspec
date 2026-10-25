Pod::Spec.new do |s|
  s.name             = 'eyewear_tryon_ios'
  s.version          = '0.1.0'
  s.summary          = 'iOS implementation of eyewear_tryon.'
  s.homepage         = 'https://example.com/eyewear_tryon'
  s.license          = { :type => 'Proprietary' }
  s.author           = { 'eyewear_tryon' => 'dev@example.com' }
  s.source           = { :path => '.' }
  s.source_files     = 'Classes/**/*'
  s.dependency 'Flutter'
  s.platform         = :ios, '13.0'
  s.frameworks       = 'ARKit', 'SceneKit'
  s.swift_version    = '5.0'
  s.pod_target_xcconfig = { 'DEFINES_MODULE' => 'YES' }
end
