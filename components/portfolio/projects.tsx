import { Wrench, Figma, Github, Database, Bot, Sparkles, Trophy, Book } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const MUST_READS = [
	{ title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", cover: "/stieg.jpg" },
	{ title: "The Hobbit", author: "J.R.R. Tolkien", cover: "/hobbit.jpg" },
	{ title: "A Gentleman in Moscow", author: "Amor Towles", cover: "/gem.jpg" },
	{ title: "The Templar Legacy", author: "Steve Berry", cover: "/templa.jpg" },
	{ title: "War and Peace", author: "Leo Tolstoy", cover: "/war.jpg" },
	{ title: "The Silent Patient", author: "Alex Michaelides", cover: "/silent.jpg" },
]

const NIGHTSTAND = [
	{ title: "Project Hail Mary", author: "Andy Weir", cover: "/andy.jpg" },
	{ title: "Valour (The Faithful and the Fallen #2)", author: "John Gwynne", cover: "/valour.jpg" },
	{ title: "Trunk Music (Harry Bosch #5)", author: "Michael Connelly", cover: "/trunk.jpg" },
]

export default function Projects() {
	return (
		<div>
			<h2 className="text-2xl md:text-3xl font-semibold text-balance flex items-center gap-2 mb-8">
				<Wrench className="h-6 w-6 text-gray-900" />
				What I Do When Not PMing?
			</h2>

			<div className="mt-6 grid gap-4 md:grid-cols-2">
				{/* Card 1: Vibe Coding Adventures */}
				<Card className="transition hover:shadow-md gap-2">
					<CardHeader className="pb-0">
						<div className="flex items-center justify-center gap-2 text-center">
							<Bot className="h-5 w-5 text-gray-900" aria-hidden />
							<CardTitle className="text-lg">Vibe Coding Adventures</CardTitle>
						</div>
					</CardHeader>
					<CardContent className="text-sm md:text-base text-muted-foreground space-y-3 pt-0">
						<p>
							When I'm not optimizing user funnels, I'm building things just because I can. Case in point —
							this entire portfolio exists because I described what I wanted to an AI and tweaked some prompts.
						</p>
						<p>
							In fact, I've pushed more code to GitHub in the past 2 months than the past 4 years.
						</p>
						<p>
							Built a cricket auction app for my local club because tracking player budgets on WhatsApp was
							absolute chaos.
						</p>
						<p>
							Currently working on something bigger for the PM community — More details coming soon.
						</p>
						<p>
							<span className="font-medium text-foreground">My Build Process:</span> Mock it up in Figma, get
							the frontend designed on v0 by Vercel, spin up Supabase for backend magic, then vibe code the
							connections with Claude Code and GitHub Copilot. Ship fast, iterate faster.
						</p>

						<div className="pt-1 flex flex-nowrap items-center gap-2 overflow-x-auto">
							<span className="inline-flex items-center gap-1.5 rounded-full border border-gray-300/80 bg-white/80 px-2.5 py-1 shadow-sm backdrop-blur-sm transition-colors hover:border-gray-400">
								<Figma className="h-4 w-4 text-gray-700" />
								<span className="text-xs text-black">Figma</span>
							</span>
							<span className="inline-flex items-center gap-1.5 rounded-full border border-gray-300/80 bg-white/80 px-2.5 py-1 shadow-sm backdrop-blur-sm transition-colors hover:border-gray-400">
								<Sparkles className="h-4 w-4 text-gray-700" />
								<span className="text-xs text-black">v0 by Vercel</span>
							</span>
							<span className="inline-flex items-center gap-1.5 rounded-full border border-gray-300/80 bg-white/80 px-2.5 py-1 shadow-sm backdrop-blur-sm transition-colors hover:border-gray-400">
								<Database className="h-4 w-4 text-gray-700" />
								<span className="text-xs text-black">Supabase</span>
							</span>
							<span className="inline-flex items-center gap-1.5 rounded-full border border-gray-300/80 bg-white/80 px-2.5 py-1 shadow-sm backdrop-blur-sm transition-colors hover:border-gray-400">
								<Github className="h-4 w-4 text-gray-700" />
								<span className="text-xs text-black">GitHub Copilot</span>
							</span>
						</div>
					</CardContent>
				</Card>

				{/* Card 2: Weekend Warrior Mode */}
				<Card className="transition hover:shadow-md gap-2">
					<CardHeader className="pb-0">
						<div className="flex items-center justify-center gap-2 text-center">
							<Trophy className="h-5 w-5 text-gray-900" aria-hidden />
							<CardTitle className="text-lg">Weekend Warrior Mode</CardTitle>
						</div>
					</CardHeader>
					<CardContent className="text-sm md:text-base text-muted-foreground space-y-3 pt-0">
						<p>
							Sports are my productive procrastination — can't work on user stories when Madrid is playing or
							Hamilton is fighting for points.
						</p>
						<p>
							When I'm not building products, I'm either swinging a cricket bat badly or yelling at screens
							showing various sports.
						</p>
						<p>
							All-rounder for local cricket club — which means I bat at 5, bowl my quota of overs, and field
							wherever the captain forgot to place someone; but it gets me on the team sheet.
						</p>
						<p>
							Madrid fan since 2014 because nothing says "good timing" like supporting them during their
							best decade. Nadal made me love tennis, but Sinner is making me believe in post-Big 3 era.
						</p>
						<p>
							F1 is my weekend religion — riding the Hamilton rollercoster through the championship years,
							the wilderness years, and hopefully the comeback years.
						</p>

						<div className="pt-1 flex flex-nowrap items-center gap-2 overflow-x-auto">
							<span className="inline-flex items-center gap-1.5 rounded-full border border-gray-300/80 bg-white/80 px-2.5 py-1 shadow-sm backdrop-blur-sm transition-colors hover:border-gray-400">
								<Image
									src="/cricket.png"
									alt="Cricket"
									width={16}
									height={16}
									className="h-4 w-4 object-contain"
								/>
								<span className="text-xs text-black">Cricket</span>
							</span>
							<span className="inline-flex items-center gap-1.5 rounded-full border border-gray-300/80 bg-white/80 px-2.5 py-1 shadow-sm backdrop-blur-sm transition-colors hover:border-gray-400">
								<Image
									src="/motorbike.png"
									alt="Formula 1"
									width={16}
									height={16}
									className="h-4 w-4 object-contain"
								/>
								<span className="text-xs text-black">Formula 1</span>
							</span>
							<span className="inline-flex items-center gap-1.5 rounded-full border border-gray-300/80 bg-white/80 px-2.5 py-1 shadow-sm backdrop-blur-sm transition-colors hover:border-gray-400">
								<Image
									src="/tennis.png"
									alt="Tennis"
									width={16}
									height={16}
									className="h-4 w-4 object-contain"
								/>
								<span className="text-xs text-black">Tennis</span>
							</span>
							<span className="inline-flex items-center gap-1.5 rounded-full border border-gray-300/80 bg-white/80 px-2.5 py-1 shadow-sm backdrop-blur-sm transition-colors hover:border-gray-400">
								<Image
									src="/real-madrid.png"
									alt="Real Madrid"
									width={16}
									height={16}
									className="h-4 w-4 object-contain"
								/>
								<span className="text-xs text-black">Real Madrid</span>
							</span>
						</div>
					</CardContent>
				</Card>

				{/* Card 3: Reading Escapes */}
				<Card className="transition hover:shadow-md md:col-span-2 gap-2">
					<CardHeader className="pb-0">
						<div className="flex items-center justify-center gap-2 text-center">
							<Book className="h-5 w-5 text-gray-900" aria-hidden />
							<CardTitle className="text-lg">Reading Escapes</CardTitle>
						</div>
					</CardHeader>
					<CardContent className="text-sm md:text-base text-muted-foreground pt-0">
						<div className="md:grid md:grid-cols-5 md:gap-4">
							<div className="md:col-span-2 text-sm md:text-base text-muted-foreground space-y-4">
								<p>
									<span className="font-medium text-foreground">TL;DR:</span> When I’m not herding roadmaps,
									I’m lost in other worlds. Fiction is my reset switch.
								</p>
								<div>
									<div className="font-medium text-foreground mb-1">What I binge</div>
									<p className="mb-1">Mysteries: Larsson, Christie, Bosch, Reacher</p>
									<p className="mb-1">Conspiracy rides: Cotton Malone, Gabriel Allon</p>
									<p className="mb-1">Comfort epics: LOTR, Harry Potter, The Hobbit</p>
									<p className="mb-1">Classics that still punch: Orwell, Dostoevsky, Tolstoy</p>
								</div>
								<div>
									<div className="font-medium text-foreground mb-1">Recent detours</div>
									<p>
										I sprinted through The Thursday Murder Club. I’ve been binging the early Gabriel Allon
										novels—crafty, clean, relentless. I also took a deep dive into Michael Connelly; Bosch is
										a vibe.
									</p>
								</div>
								<div>
									<div className="font-medium text-foreground mb-1">Craft nerd-out</div>
									<p>
										I love how Tolkien builds quiet stakes that still feel huge. Larsson’s precision creates
										tension-by-detail that tightens every chapter. Towles turns stillness into cinema with
										style and restraint.
									</p>
								</div>
								<div>
									<div className="font-medium text-foreground mb-1">Now Reading</div>
									<p>
										Project Hail Mary · Valour (The Faithful and the Fallen #2) · Trunk Music (Harry Bosch
										#5)
									</p>
								</div>
							</div>

							<div className="md:col-span-3 mt-3 md:mt-0">
								<div className="flex flex-col gap-4">
									<div className="rounded-xl border border-gray-200 bg-white/70 p-4 shadow-sm">
										<h3 className="text-sm font-medium text-foreground text-center mb-3">
											Shelf-Tested Six — Must-Reads
										</h3>
										<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
											{MUST_READS.map((b, i) => (
												<div
													key={`starter-${i}`}
													className="rounded-md border border-gray-200/70 bg-white/60 p-1 shadow-sm backdrop-blur-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-gray-300"
												>
													<div className="aspect-[3/4] h-28 mx-auto overflow-hidden rounded-sm border border-gray-200">
														<Image
															src={b.cover}
															alt={`${b.title} cover`}
															width={112}
															height={149}
															className="h-full w-full object-cover"
														/>
													</div>
													<div className="mt-1 text-center">
														<div className="text-[12px] leading-tight font-medium text-foreground">
															{b.title}
														</div>
														<div className="text-[11px] leading-tight text-muted-foreground">
															{b.author}
														</div>
													</div>
												</div>
											))}
										</div>
									</div>

									<div className="rounded-xl border border-gray-200 bg-white/70 p-4 shadow-sm">
										<h3 className="text-sm font-medium text-foreground text-center mb-3">
											On My Nightstand Right Now
										</h3>
										<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
											{NIGHTSTAND.map((b, i) => (
												<div
													key={`night-${i}`}
													className="rounded-md border border-gray-200/70 bg-white/60 p-1 shadow-sm backdrop-blur-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-gray-300"
												>
													<div className="aspect-[3/4] h-28 mx-auto overflow-hidden rounded-sm border border-gray-200">
														<Image
															src={b.cover}
															alt={`${b.title} cover`}
															width={112}
															height={149}
															className="h-full w-full object-cover"
														/>
													</div>
													<div className="mt-1 text-center">
														<div className="text-[12px] leading-tight font-medium text-foreground">
															{b.title}
														</div>
														<div className="text-[11px] leading-tight text-muted-foreground">
															{b.author}
														</div>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}

