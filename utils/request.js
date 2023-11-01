//define a fuc
let $request = function(url,data,method='GET'){
	return new Promise((resolve)=>{
		uni.request({
		url,
		method,
		success:({data})=>{
			resolve(data)
		}	
		})
	})
}
uni.$request =$request

uni.$get = function(url,data){
	return $request(url,data,'GET')
}

uni.$post = function(url,data){
	return $request(url,data,'POST')
}