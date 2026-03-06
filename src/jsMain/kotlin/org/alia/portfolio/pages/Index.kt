package org.alia.portfolio.pages

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.core.Page
import com.varabyte.kobweb.core.data.add
import com.varabyte.kobweb.core.init.InitRoute
import com.varabyte.kobweb.core.init.InitRouteContext
import com.varabyte.kobweb.core.layout.Layout
import org.jetbrains.compose.web.css.cssRem
import org.alia.portfolio.components.layouts.PageLayoutData
import org.alia.portfolio.components.sections.HeroSection
import org.alia.portfolio.components.sections.BodyOfWorkSection

@InitRoute
fun initHomePage(ctx: InitRouteContext) {
    ctx.data.add(PageLayoutData("Ali A. - Visuell KI-Kreatør"))
}

@Page
@Layout("org.alia.portfolio.components.layouts.PageLayout")
@Composable
fun HomePage() {
    Column(Modifier.fillMaxWidth().gap(4.cssRem)) {
        // Here we'd link to the actual background video.
        // For demonstration purposes, we use a placeholder or empty string.
        HeroSection(videoUrl = "hero_test.mp4")

        // Body Of Work Grid will be inserted here
        BodyOfWorkSection()
    }
}
