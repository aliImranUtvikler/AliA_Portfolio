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
    Project(
        id = "revira-promo",
        title = "Demo-video for Revira",
        subtitle = "Oppdrag",
        pitch = "Revira AS leverer naturlig avskrekkingsmiddel for skadedyr, og hadde behov for en tydelig måte å forklare påføringsprosessen av middelet på. Jeg utviklet en instruksjonsvideo hvor alt fra det visuelle universet til fortellerstemmen er skapt med KI. Resultatet er en moderne video som bryter ned komplekse instrukser til noe som er lett å forstå.",
        company = "Revira AS",
        tools = "Nano Banana Pro, Kling AI, CapCut, Canva, ElevenLabs",
        method = "Inkrementell (Smidig)",
        coverImage = "/images/projects/revira-cover.png",
        heroVideoUrl = "/video/projects/Revira_P_small.mp4",
        heroVideoPosterUrl = "/video/projects/Revira_P_small-Cover.jpg",
        processImage = "/images/projects/revira-sand-process.png",
processDescription = "Arbeidsprosessen var bygget opp rundt en smidig og inkrementell metode. Det visuelle grunnlaget ble generert i Midjourney, før bildene ble gitt liv og flytende bevegelser ved hjelp av Kling AI. For å sikre en profesjonell og pedagogisk tone, ble fortellerstemmen syntetisert i ElevenLabs. Til slutt ble alle elementene satt sammen, klippet og optimalisert med teksting i CapCut og Canva for å sikre maksimal effekt på mobile flater."),
    Project(
        id = "real-karamel",
        title = "Real Karamel",
        subtitle = "KI-generert DJ og Influencer",
        pitch = "Real Karamel er en 100 % KI-generert DJ-artist som har tatt TikTok og Spotify med storm under profilen mjevo_production. Målet var å bygge en virtuell influencer fra bunnen av med en unik musikalsk og visuell identitet. Casen har vært en massiv viral suksess med over 22 millioner visninger, 108 000+ følgere og 1,2 millioner likerklikk, og konseptet genererer i dag faktiske inntekter. Dette prosjektet demonstrerer kraften i konsekvent, KI-drevet merkevarebygging.",
        company = "Eget prosjekt (mjevo_production)",
        tools = "Nano Banana Pro, Kling AI, Suno, CapCut",
        method = "Karakterdesign & Tekst-til-Video",
        coverImage = "/images/projects/karamel-cover.png", 
        heroVideoUrl = "https://www.tiktok.com/@mjevo_production/video/7463472292215934230",
        processImage = "/images/projects/karamel-process.png",
        processDescription = "Nøkkelen til suksessen bak Real Karamel ligger i et systematisk arbeid med å opprettholde visuell kontinuitet. Jeg utviklet en dyptgående karakterprofil med faste attributter for alder, klesstil og personlighet for å sikre at hun ser lik ut hver gang. Ved å bruke detaljerte prompter og ren 'Tekst-til-Video'-funksjonalitet oppnådde jeg maksimal kontroll over karakterens bevegelser. Musikken ble skapt med Suno, før alt ble satt sammen, klippet og optimalisert for TikTok-formatet i CapCut."
    ),
    Project(
        id = "reborn-rebel",
        title = "Promo-video for Reborn Rebel",
        subtitle = "Mote & KI",
        pitch = "Denne promosjonsvideoen kombinerer virkelighet med KI, hvor Reborn Rebels motto er implementert som en rød tråd gjennom hele filmen. Resultatet er en visuell opplevelse preget av mystikk og røffhet, pakket inn i en urban stil som er skreddersydd for å treffe målgruppen midt i hjertet.",
        company = "Reborn Rebel",
        tools = "Nano Banana Pro, Kling AI, CapCut",
        method = "Referanse-KI & Bilde-til-Video",
        coverImage = "/images/projects/reborn-cover.png",
        heroVideoUrl = "/video/projects/Reborn_P_hero.mp4",
        heroVideoPosterUrl = "/video/projects/Reborn_P_hero-Cover.jpg",
        processImage = "/images/projects/reborn-process.png",
        processDescription = "For å oppnå den sømløse blandingen av virkelighet og KI, ble ekte fotografier av plaggene brukt som direkte referanser (Image-to-Image). Dette gjorde det mulig å beholde klærnes autentiske tekstur og detaljer på virtuelle modeller i det urbane landskapet. Stillbildene ble deretter animert med bilde-til-video-teknologi og klippet dynamisk i CapCut."
    )
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
