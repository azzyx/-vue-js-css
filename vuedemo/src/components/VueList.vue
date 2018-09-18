<template>
	<div class="user-info">
    <div class="avatar">
    	<p>
    		<span></span>
    	</p>
    </div>
		<p>
			<label for="user-name">昵称：</label>
			<input type="text" id="user-name">
		</p>
		<p>
			<label for="user-password">密码：</label>
			<input type="password" id="user-password">
		</p>
		<p>
			<button id="loginBtn">登录</button>
			<button id="regBtn">注册</button>
		</p>
	</div>
</template>
<script type="ecmascript-6">
export default {
  name: 'User'
}
</script>
<style type="text/css">
  .user-info {
    padding: 0 10px;
    text-align: center;
  }
  .user-info p {
    padding-top: 10px;
  }
  .user-info button {
  	color: #fff;
    
  	border-radius: 4px;
  	padding: 4px 8px;
    background: #0cc;
    vertical-align: middle;
  }
</style>
