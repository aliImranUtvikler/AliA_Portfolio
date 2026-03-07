package org.alia.portfolio.models

data class Project(
    val id: String,
    val title: String,
    val subtitle: String,
    val pitch: String,
    val company: String,
    val tools: String,
    val method: String,
    val coverImage: String,
    val heroVideoUrl: String? = null,
    val heroVideoPosterUrl: String? = null,
    val processImage: String? = null,
    val processDescription: String? = null
)
