import { withTitle } from "../../utils/TitleWrapper";
import { EventsComponent } from "./Events/Events";
import { AlumniComponent } from "./Alumni/Alumni";
import { ForMediaComponent } from "./ForMedia/ForMedia";
import { PartnersComponent } from "./Partners/Partners";
import { PartnershipComponent } from "./Partnership/Partnership";
import { PublicationsComponent } from "./Publications/Publications";
import { TeamComponent } from "./Team/Team";

export const Events = withTitle(EventsComponent, "header.events");
export const Alumni = withTitle(AlumniComponent, "header.alumni");
export const ForMedia = withTitle(ForMediaComponent, "header.for-media");
export const Partners = withTitle(PartnersComponent, "header.partners");
export const Partnership = withTitle(
  PartnershipComponent,
  "header.partnership"
);
export const Publications = withTitle(
  PublicationsComponent,
  "header.publications"
);
export const Team = withTitle(TeamComponent, "header.team");
