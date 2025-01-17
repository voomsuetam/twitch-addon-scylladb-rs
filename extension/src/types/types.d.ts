export interface TwitchUser {
  id: number
  login: string
  display_name: string
  type: string
  broadcaster_type: string
  description: string
  profile_image_url: string
  offline_image_url: string
  view_count: number
  email: string
  created_at: string

  // Custom fields
  pronouns?: string
  occupation?: string
}

export interface UserSettings {
  user_id?: int
  username?: string
  locale?: string
  timezone?: string
  occupation?: string
  pronouns?: string
  updated_at?: string
}
