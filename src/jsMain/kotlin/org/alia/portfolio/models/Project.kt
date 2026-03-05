package org.alia.portfolio.models

data class Project(
    val id: String,
    val title: String,
    val description: String,
    val coverImage: String,
    val mediaUrls: List<String> = emptyList()
)
