import {defineConfig} from 'vite'
import {resolve} from 'path'

export default defineConfig((command)=>{

	if (command.mode==='production') {
		return {
			build:{
				rollupOptions:{
					
					input: {
						app:resolve(__dirname,'app','index.html')
					}
				}
			}
		}
	}

	return {

	}
	
})