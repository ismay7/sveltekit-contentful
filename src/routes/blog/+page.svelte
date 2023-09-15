<script>
	export let data;
</script>

<section>
    <h1>Blog Posts</h1>

    {#each data.blogs as blog}

    <h3>{blog.blogTitle}</h3>
    <small>by {blog.blogAuthor}</small>
    <div class="blog__wrap"><span>{@html blog.blogBody}</span></div>
    <a class="readmore" href="./">read more</a>  

    {/each}
    
</section>

<style>
    h1{
        margin: 2rem 0;
    }
    h3{
        text-align: center;
        margin: 2rem;
    }
    .blog__wrap{
        padding: 0.25rem;
        margin: 0 auto;
        max-width: 500px;
        text-align: center;
    }
    span{
        line-height: 1.8;
    }

    small{
        text-align: center;
    }
    .readmore{
        display: block;
        margin: 0.25rem auto;
        font-size: 0.8rem;
        text-align: center;
    }

</style>