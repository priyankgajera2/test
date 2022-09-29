AUI().ready(
	/*
	This function gets loaded when all the HTML, not including the portlets, is
	loaded.
	*/

	() => {
		
		const togglePersonalMenuDropdown = document.querySelector('.js-toggle-personal-menu-dropdown');

		if (togglePersonalMenuDropdown) {
			togglePersonalMenuDropdown.onclick = (event) => {
				const personalMenuDropDown = document.querySelector('.js-personal-menu-dropdown');

				event.currentTarget.classList.toggle('open');

				if (personalMenuDropDown) {
					personalMenuDropDown.classList.toggle('show');
				}
			}
		}

		const togglePersonalMenuDrawer = document.querySelector('.js-toggle-personal-menu-drawer');

		if (togglePersonalMenuDrawer) {
			togglePersonalMenuDrawer.onclick = (event) => {
				const personalMenuDrawer = document.querySelector('.js-personal-menu-drawer');

				event.currentTarget.classList.toggle('open');

				if (personalMenuDrawer) {
					personalMenuDrawer.classList.toggle('show');
				}
			}
		}

		const menubarToggler = document.querySelector('.js-menubar-toggler');

		if (menubarToggler) {
			menubarToggler.onclick = (event) => {
				document.body.classList.toggle('menubar-closed');
			}
		}

		const toggleMobileNavigation = document.querySelector('.nav-mobile');
		const toggleHamburgerOpen = document.querySelector('.js-toggle-hamburger-open');
		const toggleHamburgerClose = document.querySelector('.js-toggle-hamburger-close');

		if (toggleHamburgerOpen) {
			toggleHamburgerOpen.onclick = (event) => {
				event.currentTarget.classList.toggle('is-active');
				toggleHamburgerClose.classList.toggle('is-active');
				toggleMobileNavigation.classList.toggle('d-none');
				document.body.classList.toggle('menubar-expanded');
			}
		}


		if (toggleHamburgerClose) {
			toggleHamburgerClose.onclick = (event) => {
				event.currentTarget.classList.toggle('is-active');
				toggleHamburgerOpen.classList.toggle('is-active');
				toggleMobileNavigation.classList.toggle('d-none');
				document.body.classList.toggle('menubar-expanded');
			}
		}

		document.querySelectorAll('.expand-sub-menu').forEach( subMenu => {
			subMenu.onclick  = (event) => {
				event.currentTarget.classList.toggle('open');
				event.currentTarget.parentElement.parentElement.classList.toggle('open');
				event.currentTarget.parentElement.nextElementSibling.classList.toggle('collapse');
			}
		});
		
	}
);
