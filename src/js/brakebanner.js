class BrakeBanner{
	constructor(selector){
		this.app = new PIXI.Application({
			widtd: window.innerWidth,
			height: window.innerHeight,
			backgroundColor: 0xffffff
		})
		document.querySelector(selector).appendChild(this.app.view)
		this.stage = this.app.stage
		// create PIXI loader
		this.loader = new PIXI.Loader();
		// load more static images
		this.loader.add("btn.png", "images/btn.png");
		this.loader.add("btn_circle.png", "images/btn_circle.png");
		this.loader.add("brake_bike.png", "images/brake_bike.png");
		this.loader.add("brake_handlerbar.png", "images/brake_handlerbar.png");
		this.loader.add("brake_lever.png", "images/brake_lever.png");
		this.loader.add("malu_line.png", "images/malu_line.png");
		
		// load
		this.loader.load();
		// add monitor when static files load completed 
		this.loader.onComplete.add(() =>{
			this.show();
		})
	}
	show(){
		

		const bikeContainer = new PIXI.Container();
		this.stage.addChild(bikeContainer)

		bikeContainer.scale.x = bikeContainer.scale.y = 0.3;

		// bikeContainer.scale.x = bikeContainer.scale.y = 0.3;
		const bikeImage = new PIXI.Sprite(this.loader.resources['brake_bike.png'].texture);
		bikeContainer.addChild(bikeImage)

		
		
		const bikeLeverImage = new PIXI.Sprite(this.loader.resources['brake_lever.png'].texture);
		bikeContainer.addChild(bikeLeverImage)

		bikeLeverImage.pivot.x = 455;
		bikeLeverImage.pivot.y = 455;
		
		bikeLeverImage.x = 722;
		bikeLeverImage.y = 900;
		const bikeHandbarImage = new PIXI.Sprite(this.loader.resources['brake_handlerbar.png'].texture);
		bikeContainer.addChild(bikeHandbarImage)

		let actionButton = this.createActionButton();
		actionButton.x = actionButton.y = 400;



		
	}
	createActionButton(){
		// create container
		let actionButton = new PIXI.Container();
		this.stage.addChild(actionButton);

		let btnImage = new PIXI.Sprite(this.loader.resources['btn.png'].texture);
		let btnCircle = new PIXI.Sprite(this.loader.resources['btn_circle.png'].texture)
		let btnCircle2 = new PIXI.Sprite(this.loader.resources['btn_circle.png'].texture)

		// add sence
		actionButton.addChild(btnImage);
		actionButton.addChild(btnCircle);
		actionButton.addChild(btnCircle2);
		
		// get center of circle
		btnImage.pivot.x = btnImage.pivot.y = btnImage.width/2
		btnCircle.pivot.x = btnCircle.pivot.y = btnCircle.width/2
		btnCircle2.pivot.x = btnCircle2.pivot.y = btnCircle2.width/2



		btnCircle.scale.x = btnCircle.scale.y = 0.8
		gsap.to(btnCircle.scale, { duration: 1, x:1.3,y:1.3, repeat: -1})
		gsap.to(btnCircle.scale, { duration: 1, alpha: 0, repeat: -1})
		return actionButton;
	}
	

}