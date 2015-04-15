var distributions = {
  "commercekickstart":{
    "name":"commercekickstart",
    "description":"This role was generated by the vampd generator",
    "chef_type":"role",
    "json_class":"Chef::Role",
    "default_attributes":{

    },
    "override_attributes":{
      "drupal":{
        "sites":{
          "commercekickstart":{
            "active":true,
            "deploy":{
              "action":[
                "deploy",
                "install"
              ]
            },
            "drupal":{
              "version":"7.x",
              "settings":{
                "files":"sites/default/files",
                "settings":{
                  "default":{
                    "location":"sites/default/settings.php"
                  }
                },
                "profile":"commerce_kickstart"
              }
            },
            "drush_make":{
              "api":"2",
              "files":{
                "default":"drupal-org-core.make"
              },
              "template":true
            },
            "repository":{
              "host":"github.com",
              "uri":"https://github.com/commerceguys/commerce_kickstart.git",
              "revision":"7.x-2.14"
            }
          }
        }
      }
    }
  },
  "commons":{
    "name":"commons",
    "description":"This role was generated by the vampd generator",
    "chef_type":"role",
    "json_class":"Chef::Role",
    "default_attributes":{

    },
    "override_attributes":{
      "drupal":{
        "sites":{
          "commons":{
            "active":true,
            "deploy":{
              "action":[
                "deploy",
                "install"
              ]
            },
            "drupal":{
              "version":"7.x",
              "settings":{
                "files":"sites/default/files",
                "settings":{
                  "default":{
                    "location":"sites/default/settings.php"
                  }
                },
                "profile":"commons"
              }
            },
            "drush_make":{
              "api":"2",
              "files":{
                "default":"drupal-org-core.make"
              },
              "template":true
            },
            "repository":{
              "host":"github.com",
              "uri":"http://git.drupal.org/project/commons.git",
              "revision":"7.x-3.23"
            }
          }
        }
      }
    }
  },
  "lightning":{
    "name":"lightning",
    "description":"This role was generated by the vampd generator",
    "chef_type":"role",
    "json_class":"Chef::Role",
    "default_attributes":{

    },
    "override_attributes":{
      "drupal":{
        "sites":{
          "lightning":{
            "active":true,
            "deploy":{
              "action":[
                "deploy",
                "install"
              ]
            },
            "drupal":{
              "version":"7.x",
              "settings":{
                "files":"sites/default/files",
                "settings":{
                  "default":{
                    "location":"sites/default/settings.php"
                  }
                },
                "profile":"lightning"
              }
            },
            "drush_make":{
              "api":"2",
              "files":{
                "default":"drupal-org-core.make"
              },
              "template":true
            },
            "repository":{
              "host":"github.com",
              "uri":"http://git.drupal.org/project/lightning.git",
              "revision":"7.x-1.x"
            }
          }
        }
      }
    }
  },
  "panopoly":{
    "name":"panopoly",
    "description":"This role was generated by the vampd generator",
    "chef_type":"role",
    "json_class":"Chef::Role",
    "default_attributes":{

    },
    "override_attributes":{
      "drupal":{
        "sites":{
          "panopoly":{
            "active":true,
            "deploy":{
              "action":[
                "deploy",
                "install"
              ]
            },
            "drupal":{
              "version":"7.x",
              "settings":{
                "files":"sites/default/files",
                "settings":{
                  "default":{
                    "location":"sites/default/settings.php"
                  }
                },
                "profile":"panopoly"
              }
            },
            "drush_make":{
              "api":"2",
              "files":{
                "default":"drupal-org-core.make"
              },
              "template":true
            },
            "repository":{
              "host":"github.com",
              "uri":"http://git.drupal.org/project/panopoly.git",
              "revision":"7.x-1.20"
            }
          }
        }
      }
    }
  }
}