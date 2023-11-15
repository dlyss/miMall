//define a fuc
let $request = function(url,data,method='GET' ,header={}){
	return new Promise((resolve)=>{
		uni.request({
		url,
		method,
		header,
		success:({data})=>{
			resolve(data)
		}	
		})
	})
}
uni.$request =$request

uni.$get = function(url,data,header={}){
	return $request(url,data,'GET')
}

uni.$post = function(url,data,header={}){
	return $request(url,data,'POST')
}