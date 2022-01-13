<script>
    let username, password;
    const login_submit = () =>{
        let user = {
            username,
            password
        }
        let data = fetch('/auth', {
            method : "POST",
            body: JSON.stringify(user),
            headers : {"Content-Type": "application/json"}
        })
        .then(res => res.json())
        .then(result =>{
            if(!result.error){
                window.location.href = "/app"
            }
        })
    }
</script>

<section>
    <div>
        <input type="text" placeholder="Enter your user name" bind:value={username} required>
            <br>
            <input class="" type="password" placeholder="Enter password" bind:value={password} required>
            <br>
            <button on:click={login_submit}>
                Log in
              </button>
              <button class="bg-indigo-500 text-white font-bold py-2 px-4 rounded">
                Save changes
              </button>
    </div>
</section>