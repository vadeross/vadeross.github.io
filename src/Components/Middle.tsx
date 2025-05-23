"use client";

const pr = "<svg aria-hidden='true' fill='#fff' viewBox='0 0 16 16' version='1.1' height='30' width='30' data-view-component='true'><path d='M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z'></path></svg>"

export default function Middle() {
  return(
	<section className='projects-section'>
		<div>
			<p className='projects-icon'>
				<span dangerouslySetInnerHTML={{__html: pr}}></span>
				Projects
			</p>
		</div>
		<div  className='project-container'>
			<section className='projects-left'>
				<div className='project'>
					<div>
						<p className='title'>
							<span className='project-icon'>
								<span dangerouslySetInnerHTML={{__html: pr}}></span>
							</span>
							<a href='https://github.com/vadeross/vadeross.github.io'>
							<span className='name'>
								<span className='user'>vadeross</span>
								<span className='sep'>/</span>
								<span className='repo-name'>vadeross.github.io</span>
							</span>
							</a>
						</p>
						<p className='description'>My website</p>
					</div>
				</div>
			</section>
			<section className='projects-right'>
				<div className='project'>
					<div>
						<p className='title'>
							<span className='project-icon'>
								<span dangerouslySetInnerHTML={{__html: pr}}></span>
							</span>
							<a href='https://github.com/vadeross/dotfiles'>
							<span className='name'>
								<span className='user'>vadeross</span>
								<span className='sep'>/</span>
								<span className='repo-name'>dotfiles</span>
							</span>
							</a>
						</p>
						<p className='description'>My dotfiles</p>
					</div>
				</div>
			</section>
		</div>
	</section>
)}
