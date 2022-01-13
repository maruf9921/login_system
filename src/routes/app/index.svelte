<script>
    const log_out = async () =>{
        let data = await fetch("/auth")
        .then(res => res.json())
        .then(result =>{
            if(result.status === 200 || result.success === true){
                window.location.href = "/login"
            }
        })
    }
</script>

<section>
    <button on:click={log_out}>Log Out</button>
</section>