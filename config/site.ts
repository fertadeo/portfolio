export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Portfolio Fernando Tadeo",
	description: "Bienvenidos",
	navItems: [
		{
			label: "Inicio",
			href: "/",
		},
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Proyectos",
      href: "/proyectos",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Acerca de mi ",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/fertadeo",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
