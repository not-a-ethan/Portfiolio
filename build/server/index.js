import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), 6e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
//#endregion
//#region app/components/nav.tsx
function Nav(props) {
	let currentPageIsHome = false;
	let currentPageIsProjects = false;
	if (props.currentPage === "home") {
		currentPageIsHome = true;
		currentPageIsProjects = false;
	} else if (props.currentPage === "projects") {
		currentPageIsProjects = true;
		currentPageIsHome = false;
	}
	useEffect(() => {
		const test = document.getElementById("nav");
		window.addEventListener("scroll", function(e) {
			const scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
			test.style.opacity = Math.max(0, Math.min(1, -scroll / 300 + 1));
		});
	});
	return /* @__PURE__ */ jsxs("nav", {
		className: "nav",
		id: "nav",
		children: [/* @__PURE__ */ jsxs("div", {
			style: {
				gridColumn: "1",
				width: "fit-content",
				height: "fit-content"
			},
			children: [/* @__PURE__ */ jsx("h2", {
				style: {
					textDecoration: "underline",
					textDecorationColor: "#468189",
					textDecorationThickness: 10,
					fontSize: "80px",
					marginBottom: "1%",
					marginTop: "0",
					marginRight: "1vw"
				},
				className: "name-logo",
				children: "Ethan"
			}), /* @__PURE__ */ jsxs("div", {
				style: {
					alignItems: "left",
					textAlign: "left"
				},
				children: [/* @__PURE__ */ jsx("a", {
					href: "https://github.com/not-a-ethan",
					children: /* @__PURE__ */ jsxs("picture", { children: [/* @__PURE__ */ jsx("source", {
						srcSet: "./images/githubLogoDark.png",
						media: "(prefers-color-scheme: light)"
					}), /* @__PURE__ */ jsx("img", {
						src: "./images/githubLogo.png",
						alt: "Github Logo",
						className: "nav-logo nav-github"
					})] })
				}), /* @__PURE__ */ jsxs("p", {
					style: { display: "inline" },
					children: [/* @__PURE__ */ jsx("img", {
						src: "./images/discordLogo.svg",
						alt: "Discord Logo",
						className: "nav-logo nav-discord"
					}), "not_ethan."]
				})]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			style: {
				gridColumn: "2",
				width: "fit-content",
				height: "auto",
				top: "2vh",
				position: "relative"
			},
			children: [
				/* @__PURE__ */ jsx("a", {
					href: "/",
					className: currentPageIsHome ? "currentPage nav-link" : "diffrentPage nav-link",
					children: "Home"
				}),
				/* @__PURE__ */ jsx("br", {}),
				/* @__PURE__ */ jsx("a", {
					href: "/projects",
					className: currentPageIsProjects ? "currentPage nav-link" : "diffrentPage nav-link",
					children: "Projects"
				})
			]
		})]
	});
}
//#endregion
//#region app/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	ErrorBoundary: () => ErrorBoundary,
	Layout: () => Layout,
	default: () => root_default,
	links: () => links
});
var links = () => [
	{
		rel: "preconnect",
		href: "https://fonts.googleapis.com"
	},
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous"
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
	}
];
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", { children: [
			/* @__PURE__ */ jsx(Nav, { currentPage: "" }),
			children,
			/* @__PURE__ */ jsx(ScrollRestoration, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
var root_default = UNSAFE_withComponentProps(function App() {
	return /* @__PURE__ */ jsx(Outlet, {});
});
var ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary({ error }) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack;
	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
	}
	return /* @__PURE__ */ jsxs("main", {
		className: "pt-16 p-4 container mx-auto",
		children: [
			/* @__PURE__ */ jsx("h1", { children: message }),
			/* @__PURE__ */ jsx("p", { children: details }),
			stack
		]
	});
});
//#endregion
//#region app/home/skill.jsx
function Skill(props) {
	return /* @__PURE__ */ jsxs("div", {
		className: "skill",
		children: [/* @__PURE__ */ jsxs("p", {
			style: { display: "inline" },
			className: "skill-name secondary-text",
			children: [
				props.skillName,
				" ",
				/* @__PURE__ */ jsx("img", {
					alt: props.skillImgAlt,
					src: props.skillImgPath,
					className: "skill-image"
				})
			]
		}), /* @__PURE__ */ jsx("p", {
			className: "skill-description",
			children: props.skillDescription
		})]
	});
}
//#endregion
//#region app/home/home.jsx
function HomeComponent() {
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) entry.target.classList.add("show");
				else entry.target.classList.remove("show");
			});
		});
		document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));
	});
	return /* @__PURE__ */ jsxs("main", {
		id: "home",
		className: "main",
		children: [
			/* @__PURE__ */ jsx("h1", {
				className: "secondary-text hidden",
				children: "About Me"
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "hidden hidden-left",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "secondary-text",
						children: "Hey I'm Ethan"
					}),
					". I'm a student that ",
					/* @__PURE__ */ jsx("span", {
						className: "secondary-text",
						children: "loves"
					}),
					" to ",
					/* @__PURE__ */ jsx("span", {
						className: "secondary-text",
						children: "Program"
					}),
					". I am currently on the ",
					/* @__PURE__ */ jsx("span", {
						className: "secondary-text",
						children: "East Coast"
					}),
					" of the ",
					/* @__PURE__ */ jsx("span", {
						className: "secondary-text",
						children: "United states"
					}),
					". I ",
					/* @__PURE__ */ jsx("span", {
						className: "secondary-text",
						children: "help others"
					}),
					" with programming ",
					/* @__PURE__ */ jsx("span", {
						className: "secondary-text",
						children: "sharing"
					}),
					" what I have learned over the years with new comers."
				]
			}),
			/* @__PURE__ */ jsx("hr", { className: "hidden hidden-left" }),
			/* @__PURE__ */ jsx("h2", {
				className: "secondary-text hidden hidden-right",
				children: "My Programming Journey"
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "hidden hidden-left",
				children: [
					"I started in ",
					/* @__PURE__ */ jsx("span", {
						className: "secondary-text",
						children: "January 2020"
					}),
					" to make a ",
					/* @__PURE__ */ jsx("span", {
						className: "secondary-text",
						children: "website"
					}),
					" for something in real life. I started with ",
					/* @__PURE__ */ jsx("span", {
						className: "secondary-text",
						children: "JavaScript."
					}),
					" Back then I thought \"true programmers\" used binary and every language can do everything the same. So I learned up to conditionals or so and gave up since lock down happened."
				]
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "hidden hidden-right",
				children: [
					"Then in 2021 I started again learned ",
					/* @__PURE__ */ jsx("span", {
						className: "secondary-text",
						children: "HTML, CSS"
					}),
					" and ",
					/* @__PURE__ */ jsx("span", {
						className: "secondary-text",
						children: "JS"
					}),
					" (JS not for webdev). So I made some websites and then learned JS for ",
					/* @__PURE__ */ jsx("span", {
						className: "secondary-text",
						children: "frontend webdev"
					}),
					"."
				]
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "hidden hidden-left",
				children: [
					"Then learned about front end frame works and tried learning ",
					/* @__PURE__ */ jsx("span", {
						className: "secondary-text",
						children: "React"
					}),
					" but gave up after I finished the basics. Around a year later I re-learned the basics and ",
					/* @__PURE__ */ jsx("span", {
						className: "secondary-text",
						children: "taught myself"
					}),
					" the rest of the framework."
				]
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "hidden hidden-right",
				children: [
					"After that in 2024 I learned ",
					/* @__PURE__ */ jsx("span", {
						className: "secondary-text",
						children: "SQL"
					}),
					" and improving my ",
					/* @__PURE__ */ jsx("span", {
						className: "secondary-text",
						children: "Next.js"
					}),
					" skills as part of my journey of learning ",
					/* @__PURE__ */ jsx("span", {
						className: "secondary-text",
						children: "backend webdev"
					}),
					"."
				]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "hidden hidden-left",
				children: "currently I am making full stack web apps to practice my skills. I want to get a internship for this summer and hopefully a job in the next few years."
			}),
			/* @__PURE__ */ jsx("p", {
				className: "secondary-text hidden hidden-right",
				children: "Check out what I've learned"
			}),
			/* @__PURE__ */ jsx("p", {
				style: {
					fontSize: 50,
					margin: 10
				},
				className: "hidden hidden-right",
				children: "↓"
			}),
			/* @__PURE__ */ jsxs("div", {
				style: { display: "grid" },
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "row-one column-one gridItem hidden hidden-left",
						children: /* @__PURE__ */ jsx(Skill, {
							skillName: "HTML",
							skillImgPath: "/images/skills/HTML.png",
							skillImgAlt: "HTML Logo",
							skillDescription: "HTML is the a languge to build the front end of a webpage."
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "row-one column-two gridItem hidden hidden-left",
						children: /* @__PURE__ */ jsx(Skill, {
							skillName: "CSS",
							skillImgPath: "/images/skills/CSS.png",
							skillImgAlt: "CSS Logo",
							skillDescription: "CSS is used to style HTML to make it look good."
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "row-one column-three gridItem hidden hidden-left",
						children: /* @__PURE__ */ jsx(Skill, {
							skillName: "JavaScript",
							skillImgPath: "/images/skills/Javascript.png",
							skillImgAlt: "JavaScript Logo",
							skillDescription: "Javascript can be used for almost anything. It is used to make HTML interactive, the backend of a website or just about anything."
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "row-two column-one gridItem hidden hidden-right",
						children: /* @__PURE__ */ jsx(Skill, {
							skillName: "TypeScript",
							skillImgPath: "images/skills/TypeScript.png",
							skillImgAlt: "TypeScript Logo",
							skillDescription: "Javascript but with declared types"
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "row-two column-two gridItem hidden hidden-right",
						children: /* @__PURE__ */ jsx(Skill, {
							skillName: "SQL",
							skillImgPath: "/images/skills/SQL.png",
							skillImgAlt: "SQL Logo",
							skillDescription: "SQL is used to interact with databses. From reading to writing to databases."
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "row-two column-three gridItem hidden hidden-right",
						children: /* @__PURE__ */ jsx(Skill, {
							skillName: "React",
							skillImgPath: "/images/skills/React.png",
							skillImgAlt: "React Logo",
							skillDescription: "React is a Front end web framework and could be used full stack with another framework like Next.js or Remix."
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "row-three column-one gridItem hidden hidden-left",
						children: /* @__PURE__ */ jsx(Skill, {
							skillName: "Github",
							skillImgPath: "/images/skills/Github.png",
							skillImgAlt: "Github Logo",
							skillDescription: "Github is version control in the web that uses Git. It is also used to host code and open source projects."
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "row-three column-two gridItem hidden hidden-left",
						children: /* @__PURE__ */ jsx(Skill, {
							skillName: "Next.js",
							skillImgPath: "/images/skills/Nextjs.png",
							skillImgAlt: "Next.js Logo",
							skillDescription: "Next.js is a full stack web framework that uses React."
						})
					})
				]
			})
		]
	});
}
//#endregion
//#region app/routes/home.jsx
var home_exports = /* @__PURE__ */ __exportAll({
	default: () => home_default,
	meta: () => meta$1
});
function meta$1({}) {
	return [{ title: "New React Router App" }, {
		name: "description",
		content: "Welcome to React Router!"
	}];
}
var home_default = UNSAFE_withComponentProps(function Home() {
	return /* @__PURE__ */ jsx(HomeComponent, {});
});
//#endregion
//#region app/projects/project.tsx
function Project(props) {
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				console.log(entry);
				if (entry.isIntersecting) entry.target.classList.add("show");
				else entry.target.classList.remove("show");
			});
		});
		document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));
	});
	const projectTechs = [];
	props.projectTechs.forEach((tech) => {
		if (tech === "html") projectTechs.push(/* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("img", {
			src: "./images/skills/HTML.png",
			alt: "HTML Logo"
		}, "html"), /* @__PURE__ */ jsx("br", {})] }));
		else if (tech === "css") projectTechs.push(/* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("img", {
			src: "./images/skills/CSS.png",
			alt: "CSS Logo"
		}, "css"), /* @__PURE__ */ jsx("br", {})] }));
		else if (tech === "js") projectTechs.push(/* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("img", {
			src: "./images/skills/JS.png",
			alt: "JS Logo"
		}, "js"), /* @__PURE__ */ jsx("br", {})] }));
		else if (tech === "react") projectTechs.push(/* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("img", {
			src: "./images/skills/React.png",
			alt: "React Logo"
		}, "react"), /* @__PURE__ */ jsx("br", {})] }));
		else if (tech === "next") projectTechs.push(/* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("img", {
			src: "./images/skills/Nextjs.png",
			alt: "Next Logo"
		}, "next"), /* @__PURE__ */ jsx("br", {})] }));
		else if (tech === "sql") projectTechs.push(/* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("img", {
			src: "./images/skills/SQL.png",
			alt: "SQL Logo"
		}, "sql"), /* @__PURE__ */ jsx("br", {})] }));
	});
	return /* @__PURE__ */ jsxs("section", {
		className: `project hidden ${props.side === "left" ? "hidden-left" : "hidden-right"}`,
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "project-img",
				children: /* @__PURE__ */ jsx("img", {
					src: props.projectImgPath,
					alt: props.projectImgAlt
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "project-text",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "secondary-text",
						children: props.projectTitle
					}),
					/* @__PURE__ */ jsx("p", { children: props.projectText }),
					/* @__PURE__ */ jsx("br", {}),
					/* @__PURE__ */ jsx("a", {
						href: props["projectGhLink"],
						children: /* @__PURE__ */ jsxs("picture", {
							className: "github-project-link",
							children: [/* @__PURE__ */ jsx("source", {
								srcSet: "./images/githubLogoDark.png",
								media: "(prefers-color-scheme: light)"
							}), /* @__PURE__ */ jsx("img", {
								src: "./images/githubLogo.png",
								alt: "Github Logo"
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "project-techs",
				children: projectTechs
			})
		]
	});
}
//#endregion
//#region app/projects/projects.tsx
function ProjectsComponent() {
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) entry.target.classList.add("show");
				else entry.target.classList.remove("show");
			});
		});
		document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));
	});
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("header", {
		id: "project-header",
		className: "main hidden",
		children: [/* @__PURE__ */ jsx("h1", {
			className: "secondary-text",
			children: "Projects"
		}), /* @__PURE__ */ jsxs("p", { children: ["Here I will list my best projects I am most proud of. The list will be in ", /* @__PURE__ */ jsx("span", {
			className: "secondary-text",
			children: "chronological order"
		})] })]
	}), /* @__PURE__ */ jsxs("main", {
		id: "project-main",
		children: [
			/* @__PURE__ */ jsx(Project, {
				projectImgPath: "./images/projects/portfolio.png",
				projectImgAlt: "Screenshot of the Home page of this website",
				projectTitle: "My portfolio (this website)",
				projectText: "My protfolio website is this very site you are looking at right now. This site contains my biggest projects and the ones I am most proud of such as Coin Catalog. It also tells you and others how to contact me and a little about myself.",
				projectGhLink: "https://github.com/not-a-ethan/Portfiolio",
				projectTechs: ["react", "css"],
				side: "right"
			}),
			/* @__PURE__ */ jsx(Project, {
				projectImgPath: "./images/projects/coinCatalogProject.png",
				projectImgAlt: "A screenshot from the home page of Coincatalog",
				projectTitle: "Coin Catalog",
				projectText: "Coin Catalog is an open sourse project about Coins from through out U.S. history. I am constantly adding more coins and it will never stop growing. I made it and I am also the soul maintainer of the project.",
				projectGhLink: "https://github.com/Coin-Catalog",
				projectTechs: ["next", "css"],
				side: "left"
			}),
			/* @__PURE__ */ jsx(Project, {
				projectImgPath: "./images/projects/time-tracker.png",
				projectImgAlt: "A screenshot from the home page the time tracker",
				projectTitle: "Time Tracker",
				projectText: "Time Tracker is a Next.js project that tracks your time. You can create multiple projects with time entries in each project. You can also delete projects and time entries along with other features.",
				projectGhLink: "https://github.com/not-a-ethan/time-tracker",
				projectTechs: [
					"next",
					"css",
					"sql"
				],
				side: "right"
			}),
			/* @__PURE__ */ jsx(Project, {
				projectImgPath: "./images/projects/chat-app.png",
				projectImgAlt: "A screenshot from the home page the chat app",
				projectTitle: "Chat app",
				projectText: "This project has the same basic concept as other sites such as Discord. This project lets people chat (with text) on a website. Users can create multiple rooms and invite and remove users from each room independently. Users can also modfiy details of their account such as username, password and profile picture.",
				projectGhLink: "https://github.com/not-a-ethan/chat-app",
				projectTechs: [
					"next",
					"css",
					"sql"
				],
				side: "left"
			})
		]
	})] });
}
//#endregion
//#region app/routes/project.jsx
var project_exports = /* @__PURE__ */ __exportAll({
	default: () => project_default,
	meta: () => meta
});
function meta({}) {
	return [{ title: "New React Router App" }, {
		name: "description",
		content: "Welcome to React Router!"
	}];
}
var project_default = UNSAFE_withComponentProps(function Home() {
	return /* @__PURE__ */ jsx(ProjectsComponent, {});
});
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-CA4tIQAn.js",
		"imports": ["/assets/jsx-runtime-wpdN8rMc.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": true,
			"module": "/assets/root-C4ofby54.js",
			"imports": ["/assets/jsx-runtime-wpdN8rMc.js"],
			"css": ["/assets/root-D4YfgoBC.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/home": {
			"id": "routes/home",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/home-CF1E0pmf.js",
			"imports": ["/assets/jsx-runtime-wpdN8rMc.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/project": {
			"id": "routes/project",
			"parentId": "root",
			"path": "projects",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/project-CsCWXZRE.js",
			"imports": ["/assets/jsx-runtime-wpdN8rMc.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-92491cec.js",
	"version": "92491cec",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build/client";
var basename = "/";
var future = {
	"unstable_optimizeDeps": false,
	"v8_passThroughRequests": true,
	"v8_trailingSlashAwareDataRequests": true,
	"unstable_previewServerPrerendering": false,
	"v8_middleware": true,
	"v8_splitRouteModules": true,
	"v8_viteEnvironmentApi": true
};
var ssr = true;
var isSpaMode = false;
var prerender = [];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"routes/home": {
		id: "routes/home",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: home_exports
	},
	"routes/project": {
		id: "routes/project",
		parentId: "root",
		path: "projects",
		index: void 0,
		caseSensitive: void 0,
		module: project_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
