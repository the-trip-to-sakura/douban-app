<template>
  <div class="home-page">
    <h1 class="page-title">正在上映</h1>
    <div class="recent-movies">
      <ul>
        <li v-for="movie of recentMovies" :key="movie.id">
          <router-link :to="`movie/${movie.id}`">
            <div class="movie-info">
              <h3 class="overflow-x">{{ movie.title }}</h3>
              <div class="movie-cast overflow-x">
                <span v-for="cast of movie.casts" :key="cast.id">{{ cast.name }}</span>
              </div>
              <div class="movie-genres">
                <span v-for="genre of movie.genres" :key="genre">{{ genre }}</span>
              </div>
              <span class="no-movie-rating" v-if="!movie.rating.average">暂无评分</span>
              <div v-else class="movie-rating">
                <span v-for="n of Math.round(movie.rating.average / 2)" :key="n">✨</span>
              </div>
            </div>
            <img :src="movie.images.large" alt="电影海报" />
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  data() {
    return {
      recentMovies: []
    }
  },
  mounted() {
    this.getRecentMovies()
  },
  methods: {
    // 获取正在上映的电影
    getRecentMovies() {
      this.$http.get('/in_theaters?city=成都').then(({ subjects }) => {
        this.recentMovies = subjects
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.home-page {
  padding: 20px;
  background-color: #1c152e;

  .page-title {
    color: #fff;
    margin: 0 0 40px;
  }

  .recent-movies {
    ul {
      li {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 80%;
        background-color: #fff;
        margin-bottom: 50px;
        padding: 15px;
        border-radius: 10px;
        background-color: #261e37;
        color: #fff;

        img {
          position: absolute;
          right: -35px;
          top: -30px;
          width: 100px;
          border-radius: 5px;
        }
      }
    }

    .movie-info {
      width: 80%;

      h3 {
        margin: 0 0 10px;
        color: #fff;
      }
    }

    .movie-cast {
      span {
        margin-right: 5px;
        font-size: 14px;
        color: #fff;
      }
    }

    .movie-genres {
      span {
        margin-right: 5px;
        font-size: 12px;
        color: #999;
      }
    }

    .no-movie-rating {
      font-size: 12px;
      color: #999;
    }
  }
}
</style>
