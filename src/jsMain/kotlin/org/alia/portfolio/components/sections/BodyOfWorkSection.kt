package org.alia.portfolio.components.sections

import androidx.compose.runtime.Composable
import com.varabyte.kobweb.compose.foundation.layout.Column
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.compose.ui.toAttrs
import com.varabyte.kobweb.silk.style.CssStyle
import com.varabyte.kobweb.silk.style.base
import com.varabyte.kobweb.silk.style.toModifier
import org.jetbrains.compose.web.css.cssRem
import org.jetbrains.compose.web.dom.Div
import com.varabyte.kobweb.compose.ui.styleModifier
import org.jetbrains.compose.web.css.*
import org.alia.portfolio.models.Project
import org.alia.portfolio.HeadlineTextStyle
import com.varabyte.kobweb.silk.components.text.SpanText

val BodyOfWorkGridStyle = CssStyle.base {
    Modifier
        .fillMaxWidth()
        .styleModifier { 
            property("display", "grid") 
            property("grid-template-columns", "repeat(auto-fill, minmax(300px, 1fr))")
        }
        .gap(3.cssRem)
}

// Default mock projects for layout demonstration
val defaultProjects = listOf(
    Project(id = "mork-materie", title = "Mørk Materie", description = "Abstrakt KI", coverImage = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"),
    Project(id = "lys-refleksjon", title = "Lys Refleksjon", description = "Visuell film", coverImage = "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=80"),
    Project(id = "skygge-dybde", title = "Skygge Dybde", description = "Minimalistisk", coverImage = "https://images.unsplash.com/photo-1507502707541-f369a3b18502?auto=format&fit=crop&w=600&q=80")
)

@Composable
fun BodyOfWorkSection(projects: List<Project> = defaultProjects) {
    Column(Modifier.fillMaxWidth().padding(top = 4.cssRem, bottom = 4.cssRem)) {
        Div(HeadlineTextStyle.toModifier().margin(bottom = 2.cssRem).toAttrs()) {
            SpanText("Showcase")
        }
        Div(BodyOfWorkGridStyle.toModifier().toAttrs()) {
            projects.forEach { project ->
                ProjectCard(project)
            }
        }
    }
}
