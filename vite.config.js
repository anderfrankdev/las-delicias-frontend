import {defineConfig} from 'vite'
import {resolve} from 'path'

export default defineConfig((command)=>{

	if (command.mode==='production') {
		return {
			build:{
				rollupOptions:{
					
					input: {
						main:resolve(__dirname,'index.html'),
						app:resolve(__dirname,'app','index.html')
					}
				}
			}
		}
	}

	return {

	}
	
})