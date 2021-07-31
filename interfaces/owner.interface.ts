export interface Owner {
  name: string;
  alias: string;
  desc: string;
  img: string;
}

export interface OwnerAbout {
  intro: string;
  desc: string;
  extra?: string;
}
