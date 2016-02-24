echo "Install CkEditor via bower.."
bower install
echo "Done. Clone KCFinder.."
git clone git@github.com:sunhater/kcfinder.git
echo "Done. Copy custom config to ckEditor.."
cp ck_config.js bower_components/ckeditor/config.js
echo "Done. Chmod 777 upload path.."
chmod -R 777 kcfinder/upload
echo "Done"
sed -i  "s/'disabled' => true/'disabled' => false/g" kcfinder/conf/config.php
echo "Done"
