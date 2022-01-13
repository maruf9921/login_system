<script>
	import Register from './register.svelte';
    let username, email, password;
    
    
    const submit = () =>{
        let user = {
        username,
        email,
        password
    }

        let data = fetch('https://strapi4test.herokuapp.com/api/auth/local/register', {
            method : "POST",
            body: JSON.stringify(user),
            headers : {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result)
        })
    }
</script>

<section>
    <h1>Welcome To Register</h1>
    <div class="reg">
    <input type="name" placeholder="Enter Your Username" required bind:value={username}/>
    <br>
    <input type="email" placeholder="Enter Your Email" required bind:value={email}/>
    <br>
    <input type="password" placeholder="Enter Your Password" required bind:value={password}/>
    <br>
    <button on:click={submit}>Register</button>
    <p><a href="/login">Are You Already Register??</a></p>
    </div>
</section>

<style>
    input{
        padding: 10px;
        margin: 10px;
    }
</style>