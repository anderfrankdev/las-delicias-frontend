import {defineConfig} from 'vite'
import {resolve} from 'path'

export default defineConfig((command)=>{

	if (command.mode==='production') {
		return {
			build:{
				outDir: resolve(__dirname, "public"),
				rollupOptions:{
					
					input: {
						main:resolve(__dirname,'index.html')
					}
				}
			}
		}
	}

	return {

	}
	
})