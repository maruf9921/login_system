<script context="module">

    export async function load({ url, session }){
        if(!session.authenticated){
            return {status: 302, redirect: "/login"}
        }
        return {props: {segment: url.path, sess: session}}
    }
</script>

<script>

import "../../app.postcss";

    export let  sess;
    if(!sess.authenticated){
        window.location.href = "/loging"
    }
</script>

<slot></slot>