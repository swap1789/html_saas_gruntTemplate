module.exports = function(grunt){	
   
   require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

   grunt.initConfig({   	

        pkg: grunt.file.readJSON('package.json'),

		htmlhint: {
			build: {
				options: {
					'tag-pair': true,
					'tagname-lowercase': true,
					'attr-lowercase': true,
					'attr-value-double-quotes': true,
					'doctype-first': true,
					'spec-char-escape': true,
					'id-unique': true,
					'head-script-disabled': true,
					'style-disabled': true
				},
				src: ['index.html']
			}
		},

		uglify: {
			build :{
				
					'src' : 'build/js/build.js',
					'dest' : 'assets/js/main.min.js'
				}			
		},

		sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: [{
                    expand: true,
                    src: ['*.scss'],
                    cwd: 'sass',
                    dest: 'assets/css',
                    ext: '.css'
                }]
            }
        },

		watch: {
			html: {
				files: ['index.html'],
				tasks: ['htmlhint']
			}
		}


    })  

   	grunt.registerTask('default', ['watch']);
   	grunt.registerTask('compile', ['htmlhint','uglify','sass']);
};
