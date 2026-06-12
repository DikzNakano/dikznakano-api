async function loadTikTok() {

  try {

    const res = await fetch("/api/tiktok")
    const data = await res.json()

    if (!data.success) return

    // PROFILE
    document.getElementById("tiktok-avatar").src =
      data.account.avatar

    document.getElementById("tiktok-name").textContent =
      "@" + data.account.username

    document.getElementById("tiktok-bio").textContent =
      data.account.bio

    document.getElementById("tiktok-link").href =
      data.account.url

    // STATS
    document.getElementById("followers").textContent =
      data.stats.followers.toLocaleString()

    document.getElementById("likes").textContent =
      data.stats.likes.toLocaleString()

    document.getElementById("videos").textContent =
      data.stats.videos.toLocaleString()

  } catch (err) {

    console.error("TikTok API error:", err)

    document.getElementById("tiktok-name").textContent =
      "Failed to load"

    document.getElementById("tiktok-bio").textContent =
      "API error"

  }

}

loadTikTok()