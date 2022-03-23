var brandColor1 = '#1976d2';
var brandColor2 = '#233659';
var brandTextColor = '#ffffff';

var personalizedColors = {
  darkBlueBackground: '#3C425C',
  whiteText: '#FFFFFF',
  entryPointBackground: '#3C425C',
  lighterBackground: '#ecedf1',
  primaryButtonBackground: '#1976d2',
  primaryButtonColor: '#FFFFFF',
  secondaryButtonBackground: '#6e7180',
  secondaryButtonColor: '#FFFFFF',
  tertiaryButtonBackground: '#cbe0f6',
  tertiaryButtonColor: '#233659',
};

var brandMessageBubbleColors = function(bgColor) {
  return {
    Bubble: {
      background: bgColor,
      color: brandTextColor,
    },
    Avatar: {
      background: bgColor,
      color: brandTextColor,
    },
    Header: {
      color: brandTextColor,
    },
  };
};

var brandedColors = {
  Chat: {
    MessageListItem: {
      FromOthers: brandMessageBubbleColors(brandColor2),
      FromMe: brandMessageBubbleColors(brandColor1),
    },
    MessageInput: {
      Button: {
        background: brandColor1,
        color: brandTextColor,
      },
    },
    MessageCanvasTray: {
      Container: {
        background: personalizedColors.darkBlueBackground,
        color: personalizedColors.whiteText,
      },
    },
  },

  MainHeader: {
    Container: {
      background: personalizedColors.darkBlueBackground,
      color: personalizedColors.whiteText,
    },
    Logo: {
      fill: brandTextColor,
    },
  },

  EntryPoint: {
    Container: {
      background: personalizedColors.entryPointBackground,
      color: personalizedColors.whiteText,
    },
  },

  PreEngagementCanvas: {
    Container: {
      background: personalizedColors.lighterBackground,
    },

    Form: {
      SubmitButton: {
        background: personalizedColors.primaryButtonBackground,
        color: personalizedColors.whiteText,
      },
    },
  },

  Interactives: {
    Buttons: {
      Primary: {
        background: personalizedColors.tertiaryButtonBackground,
        fontColor: personalizedColors.tertiaryButtonColor,
      },
      Hover: {
        background: personalizedColors.primaryButtonBackground,
        fontColor: personalizedColors.secondaryButtonColor,
      },
    },

    Dropdown: {
      Input: {
        background: personalizedColors.tertiaryButtonBackground,
        fontColor: personalizedColors.tertiaryButtonColor,
      },
      Hover: {
        background: personalizedColors.primaryButtonBackground,
        fontColor: personalizedColors.secondaryButtonColor,
      },
    },

    Calendar: {
      Input: {
        background: personalizedColors.tertiaryButtonBackground,
        fontColor: personalizedColors.tertiaryButtonColor,
      },
    },
  },
};

var appConfig = {
  //  Change the your AccountSid
  accountSid: 'AC...',
  // Change to your Flex Flow SID
  flexFlowSid: 'F0...',
  colorTheme: {
    overrides: brandedColors,
  },
};
