<template>
  <div class="editBlog">
    <span class="title"><h4>Title: </h4> <input type="text" v-model="title"/></span>
    <h2>content</h2>
    <mavon-editor v-model="content"/>
    <button class="submit" @click="save">submit</button>
  </div>
</template>

<script>
import Blog from '@/assets/utils/models/Blog'

export default {
  name: 'EditBlog',
  data() {
    return {
      title: '',
      content: '',
      blog: '',
      owner: ''
    }
  },
  methods: {
    _getblog() {
      return new Blog({
        id: this.id,
        title: this.title,
        content: this.content,
        owner : this.owner
      })
    },
    save() {
      let blog = this._getblog()
      console.log(blog)
      if(this.$route.name == "newBlog") {
        blog.save().then(() => {
          this.$router.push({name: "showblogs"})
        })
      } else {
        blog.update().then(() => {
          this.$router.push({name: "showBlog", params: {id: this.id}})
        })
      }
    }
  },
  created() {
    if(this.$route.params.id != undefined) {
      Blog.get(this.$route.params.id)
      .then(blog => {
        this.title = blog.title
        this.content = blog.content
        this.id = blog.pk
        this.owner = blog.owner
      })
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.title{
  display: flex;
  margin: 5vh 5vw;
}

.title input {
  width: 30vw;
}


.editBlog {
  padding: 0 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.submit {
  border: 0;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
  border-radius: 5px;
  min-width: 8vw;
  min-height: 7vh;
  font-size: 1.5rem;
  color: #311f1f;
  margin: 5vh 5vw;
}
</style>