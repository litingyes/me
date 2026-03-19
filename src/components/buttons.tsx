import { SiGithub } from "@icons-pack/react-simple-icons"

import { Button } from "@/components/ui/button"

export function GithubButton() {
  return (
    <Button variant="ghost" size="icon" asChild>
      <a href="https://github.com/litingyes/me" target="_blank">
        <SiGithub />
      </a>
    </Button>
  )
}
