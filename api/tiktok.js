export default async function handler(req, res) {

  try {

    const response = await fetch(
      "https://api.theresav.biz.id/stalk/tiktok?username=dikzapalah&apikey=MNWh8"
    )

    const json = await response.json()

    const profile = json.result.profile
    const stats = json.result.stats

    res.status(200).json({
      success: true,

      account: {
        username: profile.username,
        nickname: profile.nickname,
        bio: profile.bio,
        verified: profile.verified,
        avatar: profile.avatar.large,
        url: profile.url
      },

      stats: {
        followers: stats.followers,
        following: stats.following,
        likes: stats.likes,
        videos: stats.videos
      },

      updatedAt: new Date().toISOString()
    })

  } catch (err) {

    res.status(500).json({
      success: false,
      message: "Failed to fetch TikTok data"
    })

  }

}