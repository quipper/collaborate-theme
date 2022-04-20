# Collaborate Theme for Discourse


## Development Setup
- Setup discourse ([Non Docker Setup](https://meta.discourse.org/t/beginners-guide-to-install-discourse-on-macos-for-development/15772) or [Docker Setup]( https://meta.discourse.org/t/beginners-guide-to-install-discourse-for-development-using-docker/102009))
- Apply [Collaborate Theme](https://github.com/quipper/collaborate-theme) ([How?](https://meta.discourse.org/t/how-do-i-install-a-theme-or-theme-component/63682))
- Start developing by following this [guide](https://meta.discourse.org/t/developer-s-guide-to-discourse-themes/93648)

## Recommended Add Ons
- [Discourse Theme CLI](https://meta.discourse.org/t/discourse-theme-cli-console-app-to-help-you-build-themes/82950) (so you can use vscode instead of editing directly on discourse)

## Other Files
- [Design Review Spreadsheet](https://docs.google.com/spreadsheets/d/1PnwQ9v5sUvbJjs3xBsnAMZQL3rECckYBT0lLdW8tZDQ/edit?usp=sharing)
- [Zeplin Design](https://app.zeplin.io/project/5c8bb57884704c0df41e43b6/screen/62219c5d62568558139d06af)

## How To Update Theme
- push updates or make PR
- git updated
- go to Collaborate web
- log in as admin
- go to settings
- go to customize
- click on Quipper's Collaborate Theme
- click check for update
- click update

## Notes
After publishing to production, you need to set Back to Learn link on theme component (the current one uses develop link).
- go to collaborate
- go to settings
- go to customise
- click on "Component"
- click "Icon Header Link"
- change Header links url on Theme Settings


## TODO
- Work on theme for settings page (https://collaborate.quipper.net/u/username)
- Work on theme for messages page
- Footer link is not implemented yet
- Language Changer is still not working

## Blocker So Far
- Cant create dashboard error popup (cant simulate error)

