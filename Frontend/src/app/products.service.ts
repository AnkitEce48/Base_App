import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { apiUrls } from './api.url';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:any[]=[]
  // products:any=[]

  constructor(private http:HttpClient) { 
    // this.products=[
    //   {'id':1,'type':'Scarf','color':'Blue','dimension':'90*90 cm','fabric':'Cotton Hijab','price':349,'image':'https://images.uncommongoods.com/images/items/52500/525510000026_1_640px.jpg'},
    //   {'id':2,'type':'Scarf','color':'Purple','dimension':'180*180 cm','fabric':'Silk Hijab','price':399,'image':'https://cdn.ecommercedns.uk/files/1/230981/9/12960649/dustypinksilk.jpg'},
    //   {'id':3,'type':'Scarf','color':'Dark Red','dimension':'120*120 cm','fabric':'Rayon Hijab','price':299,'image':'https://www.regalfille.com/wp-content/uploads/2018/11/Hugo-Boss-Scarf.jpg'},
    //   {'id':4,'type':'Scarf','color':'Pink','dimension':'90*90 cm','fabric':'Georgette Hijab','price':399,'image':'https://5.imimg.com/data5/SELLER/Default/2022/5/UD/UU/MJ/65727/chiffon-scarf-1000x1000.jpg'},
    //   {'id':5,'type':'Scarf','color':'Dark Pink','dimension':'120*120 cm','fabric':'Jersey Hijab','price':299,'image':'https://i.etsystatic.com/13782724/r/il/4cca56/4569547744/il_1080xN.4569547744_rabw.jpg'},
    //   {'id':6,'type':'Scarf','color':'Grey','dimension':'90*90 cm','fabric':'Satin Hijab','price':249,'image':'https://i.pinimg.com/originals/23/d0/ac/23d0ac1fad1a4d45d3e237cfcb4ebc60.jpg'},
    //   {'id':7,'type':'Scarf','color':'Green','dimension':'180*180 cm','fabric':'Chiffon Hijab','price':449,'image':'https://cdn.shopify.com/s/files/1/1486/9868/products/yangtze-store-extra-wide-chiffon-scarf-beach-scarf-gradient-green-color-chd402-24763152592.jpg?v=1519405460'},
    //   {'id':8,'type':'Scarf','color':'Black','dimension':'180*180 cm','fabric':'Glitter Hijab','price':499,'image':'https://ae01.alicdn.com/kf/HLB1atVyVAvoK1RjSZFwq6AiCFXaA/OLOME-Elegant-Foil-Gold-Striped-Scarf-for-Women-Female-Glitter-Shawls-and-scarves-Ladies-Summer-Wrap.jpg'},
    //   {'id':9,'type':'Scarf','color':'Peach','dimension':'120*120 cm','fabric':'Crinkled Sequins Hijab','price':399,'image':'https://i.pinimg.com/originals/58/0b/33/580b33ff8fecdc658587314668be243e.jpg'},
    //   {'id':10,'type':'Accessory','material':'Magnet','pins':'Magnetic Pins','price':299,'number':'12','image':'https://m.media-amazon.com/images/I/41sA2CI+mXL._SL500_.jpg'},
    //   {'id':11,'type':'Accessory','material':'Cotton Jersey','pins':'Undercaps','price':140,'number':'1','image':'https://m.media-amazon.com/images/I/61KfnwvLLxL._SX679_.jpg'},
    //   {'id':12,'type':'Accessory','material':'Metal','pins':'Metallic Pins','price':59,'number':'10','image':'https://thewomenzone.pk/cdn/shop/products/MetallicHijabPins5.1.jpg?v=1671461511&width=1946'},
    //   {'id':13,'type':'Accessory','material':'Crystal','pins':'Crystal Pins','price':99,'number':'4','image':'https://cdn.shopify.com/s/files/1/0160/2466/products/Salt_Sundry_Love_Victory_CocktailPicks_EvilEye_001_1000x1000.jpg?v=1659991582'},
    //   {'id':14,'type':'Accessory','material':'Rayon Jersey','pins':'Full Sleeve Extenders','price':299,'number':'2','image':'https://www.cappelsinc.com/wp-content/uploads/2016/07/31901-08-31901-01.jpg'},
    //   {'id':15,'type':'Accessory','material':'Rayon','pins':'Neck Collars','price':399,'number':'4','image':'https://cf.shopee.com.my/file/d9b2ca3e58870b2b50d2f2102823341f'},
    //   {'id':16,'type':'Accessory','material':'Metal','pins':'Hijab Pin Wheel','price':59,'number':'1','image':'https://cf.shopee.ph/file/4949ceb96c20423c94c92279385560bb'},
    //   {'id':17,'type':'Accessory','material':'Brouch','pins':'Stone Brouch','price':199,'number':'1','image':'https://bd-1.edkncdn.net/img/800x800/stores/6376371a580dcd4b33fc537f/product-square/1673170512771-1smumaMy5qi0BR16pmoCR.webp'},
    //   {'id':18,'type':'Accessory','material':'Metal','pins':'Loop Pins','price':99,'number':'20','image':'https://th.bing.com/th/id/OIP.TxxOL2c5LPgcKY1nYYc0gQHaHa?pid=ImgDet&w=196&h=196&c=7&dpr=1.5'},
    // ]
  }
  getScarves(){
    return this.http.get<any>(`${apiUrls.productServiceApi}get-scarves`)
  }
  getAccessories(){
    return this.http.get<any>(`${apiUrls.productServiceApi}get-accessories`)
  }
  getScarf(id:any){
    console.log(id)
    return this.http.post<any>(`${apiUrls.productServiceApi}get-product`,{id})
  } 
  getAccessory(id:any){
    console.log(id)
    return this.http.post(`${apiUrls.productServiceApi}get-product`,{id})
  }
}