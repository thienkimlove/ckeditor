echo "Install CkEditor via bower.."
bower install

echo "Done. Clone KCFinder.."
git clone git@github.com:sunhater/kcfinder.git

echo "Done. Copy custom config to ckEditor.."
cp ck_config.js bower_components/ckeditor/config.js

echo "Done. Change KCFinder config..."
sed -i  "s/'disabled' => true/'disabled' => false/g" kcfinder/conf/config.php
sed -i  's/"upload"/"\/upload"/g' kcfinder/conf/config.php
echo "Done"
