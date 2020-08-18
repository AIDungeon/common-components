export interface UserDisplay {
  mode: string
  theme: string
}

export interface UserText {
  size: string
  font: string
}

export interface UserSettings extends UserDisplay, UserText {}
