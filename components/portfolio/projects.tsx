import { Wrench, Figma, Github, Database, Bot, Sparkles, Trophy, Book } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
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
								<Card className="relative transition hover:shadow-md gap-2 bg-gradient-to-br from-indigo-50/60 via-white/80 to-pink-50/40">
									<span className="absolute left-0 top-3 bottom-3 w-3 rounded-r-full bg-gradient-to-b from-violet-300 to-violet-200" aria-hidden />
					<CardHeader className="pb-0">
						<div className="flex items-center justify-center gap-2 text-center">
							<Bot className="h-5 w-5 text-gray-900" aria-hidden />
							<CardTitle className="text-lg">Vibe Coding Adventures</CardTitle>
						</div>
					</CardHeader>
					<CardContent className="text-sm md:text-base text-muted-foreground space-y-3 pt-0">
						<p>
							When I'm not optimizing user funnels, I'm building stuff that probably doesn't need to exist but
							definitely should. <span className="font-semibold">This portfolio?</span> Told v0 what I wanted, refined the prompts, and had a website over a weekend.
						</p>
						<p>
							<span className="font-semibold">Plot twist:</span> I've committed more code to GitHub in 2 months than the previous 4 years combined, thanks to AI doing the boring parts while I focus on the interesting problems.
						</p>
						<p>
							Built my cricket club an auction app because group chat budget tracking was giving everyone anxiety. Sometimes the best products solve the smallest, most annoying problems.
						</p>
						<p>
							<span className="font-semibold">Next up:</span> something for the PM community that'll make our lives slightly less chaotic. Can't reveal everything yet, but it involves fewer browser bookmarks.
						</p>
						<p>
							<span className="font-semibold">My Flow:</span> Figma for mockups → v0 for frontend → Supabase for data → Claude Code + Copilot for the glue.
						</p>
						<p>
							Andrej Karpathy was right - modern development does feels like cheating.
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
								<Card className="relative transition hover:shadow-md gap-2 bg-gradient-to-br from-indigo-50/60 via-white/80 to-pink-50/40">
									<span className="absolute left-0 top-3 bottom-3 w-3 rounded-r-full bg-gradient-to-b from-violet-300 to-violet-200" aria-hidden />
					<CardHeader className="pb-0">
								<div className="flex items-center justify-center gap-2 text-center">
									<Trophy className="h-5 w-5 text-gray-900" aria-hidden />
									<CardTitle className="text-lg">Sports Obsession Station</CardTitle>
								</div>
					</CardHeader>
					<CardContent className="text-sm md:text-base text-muted-foreground space-y-3 pt-0">
						<p>
							Sports are my sanctioned excuse to ignore Slack notifications — can't optimize conversion rates when
							Madrid is chasing Champions League glory or Hamilton is hunting for pole position.
						</p>
						<p>
							Cricket all-rounder at the local club, which translates to "bats wherever they need runs, bowls when
							the main bowlers are tired, field wherever chaos needs managing". It's honest work and someone has to do it.
						</p>
						<p>
							Real Madrid since 2014 (yes, Ramos' 92.48 did convert a few into fanboys) - golden period, no shame!
							Tennis loyalty shifted from Nadal's clay court magic to Sinner's baseline brilliance — Sinner is making me
							believe in post-Big 3 era.
						</p>
						<p>
							F1 Sundays are sacred. Hamilton fan through championships, through Mercedes struggles, through whatever
							comes next. Some loyalties transcend performance metrics.
						</p>
						<p>
							Sports fandom is beautifully irrational — investing emotional energy in things you can't control while avoiding data you can.
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
								<Card className="relative transition hover:shadow-md md:col-span-2 gap-2 bg-gradient-to-br from-indigo-50/60 via-white/80 to-pink-50/40">
									<span className="absolute left-0 top-3 bottom-3 w-3 rounded-r-full bg-gradient-to-b from-violet-300 to-violet-200" aria-hidden />
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
									<div className="mt-3 flex justify-center">
										<Link
											href="/reading"
											className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-900 transition-colors"
											aria-label="View full reading list"
										>
											View full reading list
										</Link>
									</div>
								</div>
							</div>

							<div className="md:col-span-3 mt-3 md:mt-0">
								<div className="flex flex-col gap-4">
									<div className="rounded-xl border border-gray-200 bg-gradient-to-br from-indigo-50/70 via-white/50 to-pink-50/60 p-4 shadow-sm">
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

									<div className="rounded-xl border border-gray-200 bg-gradient-to-br from-indigo-50/70 via-white/50 to-pink-50/60 p-4 shadow-sm">
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

