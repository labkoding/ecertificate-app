# ecertificate-app

ini adalah aplikasi mobile untuk. ada 3 macam user yg menggunakan aplikasi ini yg pertama adalah peserta seminar. yg kedua adalah institusi yg memberikan seminar dan yang ke tiga adalah user operator.

## Start Development Server
```bash
npm start
```


## Publishing Websites
```bash
npx expo-optimize
npx expo export:web
# Serving Locally
npx serve web-build
```

## Building for android
```bash
expo build:android -t apk
# build an aab
expo build:android -t app-bundle
# check build status
expo build:status
# backup the keystore in a safe location:
expo fetch:android:keystore
```