import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonButtonCta extends Schema.Component {
  collectionName: 'components_common_button_ctas';
  info: {
    displayName: 'ButtonCTA';
  };
  attributes: {
    Label: Attribute.String;
    display: Attribute.Boolean;
    positionInGroup: Attribute.Integer;
    theme: Attribute.Enumeration<['primary']>;
  };
}

export interface CommonDisplayCard extends Schema.Component {
  collectionName: 'components_common_display_cards';
  info: {
    displayName: 'DisplayCard';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subheading: Attribute.Text;
    body: Attribute.Text;
  };
}

export interface CommonImage extends Schema.Component {
  collectionName: 'components_common_images';
  info: {
    displayName: 'Picture';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    media: Attribute.Media;
    type: Attribute.Enumeration<['photo', 'video']>;
  };
}

export interface CommonLink extends Schema.Component {
  collectionName: 'components_webpage_common_interface_links';
  info: {
    displayName: 'link';
    icon: 'link';
    description: '';
  };
  attributes: {
    href: Attribute.String;
    tabBehaviour: Attribute.Enumeration<['current', 'new']>;
  };
}

export interface CommonNonRelationalBookmark extends Schema.Component {
  collectionName: 'components_common_non_relational_bookmarks';
  info: {
    displayName: 'NonRelationalBookmark';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    mark: Attribute.String;
  };
}

export interface CommonPhotoAlbum extends Schema.Component {
  collectionName: 'components_webpage_common_interface_photo_albums';
  info: {
    displayName: 'AlbumPhoto';
    description: '';
  };
  attributes: {
    caption: Attribute.String;
    pictures: Attribute.Media;
  };
}

export interface CommonRelatedArticles extends Schema.Component {
  collectionName: 'components_common_related_articles';
  info: {
    displayName: 'dataCriteria';
    description: '';
  };
  attributes: {
    by: Attribute.Enumeration<['lastUpdated']>;
    order: Attribute.Enumeration<['ascending', 'descending']>;
    contains: Attribute.Text;
    quantity: Attribute.Integer;
  };
}

export interface PetEducationAdoptionGuides extends Schema.Component {
  collectionName: 'components_pet_education_adoption_guides';
  info: {
    displayName: 'adoptionGuides';
  };
  attributes: {
    header: Attribute.Component<'webpage-section.header', true>;
    guideGroup: Attribute.Component<'common.display-card', true>;
  };
}

export interface PetEducationReasonToAdopt extends Schema.Component {
  collectionName: 'components_pet_education_reason_to_adopts';
  info: {
    displayName: 'ReasonToAdopt';
  };
  attributes: {
    header: Attribute.Component<'webpage-section.header'>;
    reasonGroup: Attribute.Component<'reasons-to-get-a-pet.reason', true>;
    centredReason: Attribute.Component<'reasons-to-get-a-pet.reason'>;
    cta: Attribute.Component<'shared.cta'>;
  };
}

export interface PetListingFeaturedAdoptablePets extends Schema.Component {
  collectionName: 'components_pet_listing_featured_adoptable_pets';
  info: {
    displayName: 'featuredAdoptablePets';
  };
  attributes: {
    header: Attribute.Component<'webpage-section.header'>;
    petGroup: Attribute.Component<'common.related-articles'>;
  };
}

export interface ReasonsToGetAPetCenteredReason extends Schema.Component {
  collectionName: 'components_reasons_to_get_a_pet_centered_reasons';
  info: {
    displayName: 'CenteredReason';
    description: '';
  };
  attributes: {
    cover: Attribute.Media;
    reason: Attribute.Component<'reasons-to-get-a-pet.reason'>;
  };
}

export interface ReasonsToGetAPetListing extends Schema.Component {
  collectionName: 'components_reasons_to_get_a_pet_listings';
  info: {
    displayName: 'Listing';
  };
  attributes: {
    reasonListing: Attribute.Component<'reasons-to-get-a-pet.reason', true>;
  };
}

export interface ReasonsToGetAPetReason extends Schema.Component {
  collectionName: 'components_reasons_to_get_a_pet_reasons';
  info: {
    displayName: 'Reason';
  };
  attributes: {
    party: Attribute.String;
    statement: Attribute.Text;
  };
}

export interface SharedCta extends Schema.Component {
  collectionName: 'components_section_common_interface_ctas';
  info: {
    displayName: 'CTA';
    icon: 'apps';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    disabled: Attribute.Boolean;
    theme: Attribute.String;
    tooltip: Attribute.String;
    href: Attribute.String;
    tabOpenBehaviour: Attribute.Enumeration<['open new', 'overwrite current']>;
    positionInGroup: Attribute.Integer;
    hidden: Attribute.Boolean;
  };
}

export interface SharedHead extends Schema.Component {
  collectionName: 'components_webpage_markup_heads';
  info: {
    displayName: 'PageHead';
    icon: 'pencil';
    description: '';
  };
  attributes: {
    theme: Attribute.String;
    title: Attribute.String;
    subtitle: Attribute.Text;
  };
}

export interface SharedHero extends Schema.Component {
  collectionName: 'components_common_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    header: Attribute.Component<'webpage-section.header'>;
    background: Attribute.Component<'webpage-section.background-picture'>;
    illustration: Attribute.Component<'common.image'>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface SupportiveProgramsMethodsAndTools extends Schema.Component {
  collectionName: 'components_supportive_programs_methods_and_tools';
  info: {
    displayName: 'MethodsAndTools';
  };
  attributes: {
    header: Attribute.Component<'webpage-section.header'>;
    programGroup: Attribute.Component<'common.display-card', true>;
  };
}

export interface WebpageSectionBackgroundPicture extends Schema.Component {
  collectionName: 'components_section_generic_background_pictures';
  info: {
    displayName: 'backgroundPicture';
    description: '';
  };
  attributes: {
    type: Attribute.Enumeration<['photo', 'video']>;
    media: Attribute.Media;
  };
}

export interface WebpageSectionHeader extends Schema.Component {
  collectionName: 'components_section_generic_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    subheading: Attribute.Text;
  };
}

export interface WebpageSectionHero extends Schema.Component {
  collectionName: 'components_section_generic_heroes';
  info: {
    displayName: 'HeroBody';
    description: '';
  };
  attributes: {
    writing: Attribute.RichText;
    cta: Attribute.Component<'shared.cta', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.button-cta': CommonButtonCta;
      'common.display-card': CommonDisplayCard;
      'common.image': CommonImage;
      'common.link': CommonLink;
      'common.non-relational-bookmark': CommonNonRelationalBookmark;
      'common.photo-album': CommonPhotoAlbum;
      'common.related-articles': CommonRelatedArticles;
      'pet-education.adoption-guides': PetEducationAdoptionGuides;
      'pet-education.reason-to-adopt': PetEducationReasonToAdopt;
      'pet-listing.featured-adoptable-pets': PetListingFeaturedAdoptablePets;
      'reasons-to-get-a-pet.centered-reason': ReasonsToGetAPetCenteredReason;
      'reasons-to-get-a-pet.listing': ReasonsToGetAPetListing;
      'reasons-to-get-a-pet.reason': ReasonsToGetAPetReason;
      'shared.cta': SharedCta;
      'shared.head': SharedHead;
      'shared.hero': SharedHero;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'supportive-programs.methods-and-tools': SupportiveProgramsMethodsAndTools;
      'webpage-section.background-picture': WebpageSectionBackgroundPicture;
      'webpage-section.header': WebpageSectionHeader;
      'webpage-section.hero': WebpageSectionHero;
    }
  }
}
